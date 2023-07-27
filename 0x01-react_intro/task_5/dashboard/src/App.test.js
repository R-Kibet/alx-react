import { shallow } from 'enzyme';
import App from './App';

const wraper = shallow(<App/>);

it('renders without crashing', () => {
    shallow(<App/>);
});

it('renders App-header', () => {
    expect(wraper.find('header.App-header').exists()).toEqual(true);
});

it('renders App-body', () => {
    expect(wraper.find('main.App-body').exists()).toEqual(true);
});

it('renders App-footer', () => {
    expect(wraper.find('footer.App-footer').exists()).toEqual(true);
});