import { render} from '@testing-library/react';
import AllShows from './components/allShows';
import Show from './components/allShows/show';
test('Check for correct text showing shows', () => {                     //This test case checks whether there text showing shows is there and dom is rendered
    const { getByText } = render(<AllShows/>)
    const Showing = getByText('Showing Shows',{ exact: false })
    expect(Showing).toBeInTheDocument()
});

