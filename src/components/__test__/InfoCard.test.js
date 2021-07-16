import { cleanup, render, screen } from "@testing-library/react";
import InfoCard from "../InfoCard";

afterEach(() => {
    cleanup ();
});

const trackData = {artworkUrl100:'https://images.genius.com/4421a0c6e525272c10b020cf34975f21.1000x1000x1.jpg',
                    trackName: 'Higher Power', artistName: 'Coldplay', collectionName: 'Higher Power Album', trackPrice: '4.99'};

test('Should render card component track name', () => {
    render(<InfoCard data={trackData} />);
    const cardElement = screen.getByTestId('title-1');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Higher Power');
});

test('Should render card component artist name', () => {
    render(<InfoCard data={trackData} />);
    const cardElement = screen.getByTestId('artist-1');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Artist: Coldplay');
});

test('Should render card component album name', () => { 
    render(<InfoCard data={trackData} />);
    const cardElement = screen.getByTestId('album-1');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Album: Higher Power Album');
});

test('Should render card component price', () => {
    render(<InfoCard data={trackData} />);
    const cardElement = screen.getByTestId('price-1');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Price: 4.99$');
});