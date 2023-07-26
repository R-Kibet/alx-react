import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wraper = shallow (<Notifications/>);

it('renders without crashing', () => {
    shallow(<Notifications/>);
});

it('renders three list elements', () {
    expect(wraper.find('li').children().length).toEqual(3);
});

it('renders the <p>', () => {
    expect(wraper.containsMatchingElement(<p>Here is the list of notifications</p>))
    .toBeTruthy();
});