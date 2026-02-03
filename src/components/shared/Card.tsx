import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  href,
  className = '',
  hover = true,
}: CardProps) {
  const baseStyles =
    'bg-card rounded-xl border border-border overflow-hidden';
  const hoverStyles = hover ? 'hover-lift cursor-pointer' : '';
  const classes = `${baseStyles} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${classes}`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'wide';
  className?: string;
}

export function CardImage({
  src,
  alt,
  aspectRatio = 'video',
  className = '',
}: CardImageProps) {
  const aspectRatios = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={`${aspectRatios[aspectRatio]} relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          backgroundColor: '#e5e7eb',
        }}
      />
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-foreground ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-muted text-sm mt-2 line-clamp-2 ${className}`}>
      {children}
    </p>
  );
}
