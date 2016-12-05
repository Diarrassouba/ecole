import { EcoleAngular2RoutagePage } from './app.po';

describe('ecole-angular2-routage App', function() {
  let page: EcoleAngular2RoutagePage;

  beforeEach(() => {
    page = new EcoleAngular2RoutagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
