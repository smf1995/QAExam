import homePage from "../pages/homePage.po"
import cityPage from "../pages/cityspage.po"
describe('Hand-picked combinations feature', () => {
  beforeEach(() => {

    cy.visit('https://www.tiqets.com/en/')
  
  })


  it('TestID-001 - Hand Picked combination - Slider behavior', () => {
    const city='New York';
    homePage.setViewPort(1024,800);
    homePage.search(city);
    cityPage.verifyTitlePage(city + ' attractions');
    cityPage.verifyIfHandPickedCombinationExist();
    cityPage.verifyHandPickedCombinationTitle();
    cityPage.verifyHandPickedCombinationDescription(`Combine ${city} favorites. Some things are better together.`);
    cityPage.verifyIfHandPickedCombinationBundleCardSlider();
    cityPage.verifyArticlesNumber();
    cityPage.verifyHandPickedCombinationBundleGroups();
    cityPage.handPickerCombinationNavigationFunctionality();

  });

  it('TestID-002 Hand Picked combination - Slider behavior when the horizontal resolution is less than 900px.', () => {
    const city='New York';
    homePage.setViewPort(899,800);
    homePage.search(city,false);
    cityPage.verifyTitlePage(city + ' attractions');
    cityPage.verifyIfHandPickedCombinationExist();
    cityPage.verifyHandPickedCombinationTitle();
    cityPage.verifyHandPickedCombinationDescription(`Combine ${city} favorites. Some things are better together.`);
    cityPage.verifyIfHandPickedCombinationBundleCardSlider();
    cityPage.verifyArticlesNumber();
    cityPage.handPickerCombinationNavigationHorizontalScroll();
  });

  it('TestID-003 Hand Picked combination - Cards Information', () => {
    const city='New York';
    homePage.setViewPort(1024,800);
    homePage.search(city,false);
    cityPage.verifyTitlePage(city + ' attractions');
    cityPage.verifyIfHandPickedCombinationExist();
    cityPage.verifyHandPickedCombinationTitle();
    cityPage.verifyHandPickedCombinationDescription(`Combine ${city} favorites. Some things are better together.`);
    cityPage.verifyIfHandPickedCombinationBundleCardSlider();
    cityPage.verifyArticlesNumber();
    cityPage.verifyArticlesContent();


  });
})