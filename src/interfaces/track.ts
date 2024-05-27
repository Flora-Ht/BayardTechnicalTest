type Track = {
  id: string;
  title: string;
  published: boolean;
  genres: string[];
  artists: string[];
  audiofile: AudioFile[];
};

type AudioFile = {
  id: string;
  url: string;
  filename: string;
};
