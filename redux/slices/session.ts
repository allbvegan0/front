interface Session {
  device_id: number;
  token: string;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  expires_at: string;
  created_at: Date;
}

export {}