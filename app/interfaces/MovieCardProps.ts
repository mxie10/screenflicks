type MoveLength = {
    hour: number;
    min: number;
}

interface MovieCardProps {
    title: string;
    imageSrc: string;
    year: string;
    length: MoveLength;
    type: Array<string>;
    rate: string;
}

export default MovieCardProps;