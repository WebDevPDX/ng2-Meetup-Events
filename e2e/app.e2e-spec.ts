import { FindMeetupEventsPage } from './app.po';

describe('find-meetup-events App', function() {
  let page: FindMeetupEventsPage;

  beforeEach(() => {
    page = new FindMeetupEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
