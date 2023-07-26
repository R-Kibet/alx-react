import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
});

test('getFooterCopy with true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
});

test('getLatestNotification', () => {
    expect(getLatestNotification()).toEqual(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});