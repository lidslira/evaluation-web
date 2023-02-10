export type SendRatingProps = {
  value: number;
  setValue: (value: number) => void;
}

export type GetRatingProps = {
  setLastRating: (value: LastRatingProps) => void;
}

export type LastRatingProps = {
  id: string
  stars: number
  tutor: string
}