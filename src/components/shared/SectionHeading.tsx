interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <div className={`mb-12 ${alignStyles[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
