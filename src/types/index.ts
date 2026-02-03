// Genre Types
export interface Genre {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  relatedAreas: string[];
}

// Area Types
export interface Area {
  slug: string;
  name: string;
  nameJa: string;
  tagline: string;
  description: string;
  heroImage: string;
  accessFromAirport: string;
  averageRent: string;
  priceRange: string;
  safetyRating: number;
  foreignerFriendly: number;
  seasons: Season[];
  fitFor: string[];
  notFor: string[];
  relatedGenres: string[];
  highlights: string[];
  propertyTypes: PropertyType[];
}

export interface Season {
  name: string;
  description: string;
}

export interface PropertyType {
  type: string;
  description: string;
  priceRange: string;
}

// Property Types
export interface Property {
  id: string;
  title: string;
  area: string;
  type: string;
  price: string;
  priceYen: number;
  size: string;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  features: string[];
  investmentYield?: string;
  image: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// Quiz Types
export type AreaId =
  | 'tokyo'
  | 'osaka'
  | 'kyoto'
  | 'fukuoka'
  | 'hokkaido'
  | 'okinawa'
  | 'nagano'
  | 'yokohama';

export type ScoreMap = Partial<Record<AreaId, number>>;

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  scores: ScoreMap;
}

export interface QuizResult {
  area: string;
  propertyType: string;
  score: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  country: string;
  purpose: 'residence' | 'investment' | 'vacation' | 'other';
  budget: string;
  preferredAreas: string[];
  timeline: string;
  message: string;
}
