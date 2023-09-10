export interface IDoctorProfile {
  image: string;
  name: string;
  specialization: string;
  hospital: string;
  ratings: number;
  number_of_ratings: number;
}

export interface IDoctorCardProps {
  data: IDoctorProfile;
}
