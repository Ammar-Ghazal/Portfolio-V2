import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    environmentProps: {
        windowWidth: 1368,
        windowHeight: 1107,
    },
});
