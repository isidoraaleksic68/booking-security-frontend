export interface Certificate {
  issuer?: string;
  subject?: string;
  startDate?: string;
  endDate?: string;
  type?: string;
  alias?: string;
  isRevoked?: boolean;
}
