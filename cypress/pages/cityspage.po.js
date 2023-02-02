class cityPage {
  elements = {
    title: () => cy.get(".text-heading-l"),
    handPickedCombinationDiv: () =>
      cy.get(
        "section[data-track-metadata-query='bundle_cards: lists.bundle_cards.items']"
      ),
    handPickedCombinationTitle: () =>
      cy.get("h2[class='text-heading-m mt0 mb4 ']"),
    handPickedCombinationDescription: () =>
      cy.get("p[class='text-body mt0 mb16']"),
    handPickedCombinationBundleCardSlider: () =>
      cy.get("div[class='BundleCardsSlider__slides-wrapper flex mt4 mb8']"),
    handPickedCombinationBundleGroups: () =>
      cy.get("div[class='BundleCardsSlider__slide flex']"),
    handPickedCombinationArticles: () =>
      cy.get(
        "article[class^='Block bg-white    round-corners-4  Card Card--big']"
      ),
    handPickedCombinationNavLeftButton: () =>
      cy.get(
        "button[class='round-corners-full pa0 reset-border shadow outline@focus bg-ink500 Slider__button Slider__button--prev anim-reveal BundleCardsSlider__button']"
      ),
    handPickedCombinationNavRightButton: () =>
      cy.get(
        "button[class='round-corners-full pa0 reset-border shadow outline@focus bg-ink500 Slider__button Slider__button--next anim-reveal BundleCardsSlider__button']"
      ),
    handPickedCombinationHorizontalScroll: () =>
      cy.get(".BundleCardsSlider > .scroll-x-auto"),
    articlePicture: () =>
      cy.get("picture"),
    articleTitle: () =>
      cy.get("h3[class='CardTitle mb4 text-break-word']"),
    articleDescriptionText: () =>
      cy.get("p[class='text-ink200 text-14 my0 line-clamp-2']"),
    articleDescriptionList: () =>
      cy.get("ol[class='reset-list my0 pl0 text-14 text-ink300']"),
    articleFooter: () =>
      cy.get("div[class='CardInfoFooter__details flex justify-between']"),
    articleReviewScore: () =>
      cy.get("span[class='mr4 text-500']"),
    articleNumberOfReview: () =>
      cy.get("span[class='text-ink300']"),  
    articleReviewScore: () =>
      cy.get("span[class='mr4 text-500']"),
    articlePriceFrom: () =>
      cy.get("span[class='text-12']"),
    articleDiscount: () =>
      cy.get("span[class*='round-corners-16 text-12']"),
    articlePreDiscount: () =>
      cy.get("span[class='Price CardPricing__prediscount-price ml4']"),
    articlePriceDiscounted: () =>
      cy.get("span[class='Price CardPricing__price text-500 block text-red600']"),
    articlePrice: () =>
      cy.get("span[class='Price CardPricing__price text-500 block text-ink500']"),
  };
  
  /**
   * This method verify the title of the page is the one expected
   * @param {string} title 
   */
  verifyTitlePage(title) {
    this.elements.title().should("contain.text", title);
  }

  /**
   * This method verify if the Hand-picked combination section exist
   */
  verifyIfHandPickedCombinationExist() {
    this.elements.handPickedCombinationDiv();
  }

  /**
   * This method verify if hand-picked combination section have the expected title 
   * @param {string} text text to do the validation
   */
  verifyHandPickedCombinationTitle() {
    this.elements
      .handPickedCombinationTitle()
      .should("contain.text", "Hand-picked combinations");
  }

  /**
   * This method verify if hand-picked combination section have the expected descrption 
   * @param {string} text text to do the validation
   */
  verifyHandPickedCombinationDescription(text) {
    this.elements
      .handPickedCombinationDescription()
      .should("contain.text", text);
  }
  /**
   * This method verify if the slider exist on the page
   */
  verifyIfHandPickedCombinationBundleCardSlider() {
    this.elements.handPickedCombinationBundleCardSlider();
  }

  /**
   * This method verify if 9 articles are in the slider
   */
  verifyArticlesNumber() {
    this.elements.handPickedCombinationArticles().should("have.length", 9);
  }

  /**
   * This method verify if 3 groups exists on the slider
   */
  verifyHandPickedCombinationBundleGroups() {
    this.elements
      .handPickedCombinationBundleGroups()
      .should("have.length", 3)
      .each(($el) => {
        cy.wrap($el).children().should("have.length", 3);
      });
  }

  /**
   * This method allow us to verify the state of the slider 
   * @param {integer} nGroup the Group that we want verify [1,2,3]
   * @param {boolean} firstValidation true if is the first validation since we load the web page and false if not
   */
  verifyHandPickedCombinationNavigationButton(nGroup, firstValidation) {
    switch (nGroup) {
      case 1:
        this.elements
          .handPickedCombinationNavLeftButton()
          .should("have.css", "display", "none");
        this.elements
          .handPickedCombinationNavRightButton()
          .should("not.have.css", "display", "none");
        if (!firstValidation)
          this.elements
            .handPickedCombinationBundleCardSlider()
            .should("have.css", "transform", "matrix(1, 0, 0, 1, 0, 0)");

        break;
      case 2:
        this.elements
          .handPickedCombinationNavLeftButton()
          .should("not.have.css", "display", "none");
        this.elements
          .handPickedCombinationNavRightButton()
          .should("not.have.css", "display", "none");
        this.elements
          .handPickedCombinationBundleCardSlider()
          .should("have.css", "transform", "matrix(1, 0, 0, 1, -1007, 0)");
        break;
      case 3:
        this.elements
          .handPickedCombinationNavLeftButton()
          .should("not.have.css", "display", "none");
        this.elements
          .handPickedCombinationNavRightButton()
          .should("have.css", "display", "none");
        this.elements
          .handPickedCombinationBundleCardSlider()
          .should("have.css", "transform", "matrix(1, 0, 0, 1, -2014, 0)");
    }
  }

  /**
   * This method click in a button of the slider to navigate beetween the group depending on the input
   * @param {integer} action 0 to click on the left button and 1 to click on the right button
   */
  handPickedCombinationNavigationAction(action) {
    if (action === 0) {
      this.elements.handPickedCombinationNavLeftButton().click();
    } else {
      this.elements.handPickedCombinationNavRightButton().click();
    }
  }

  /**
   * This method navigate beetween the 3 groups of article that the slide apresent and verify the status of each group when we change the group
   */
  handPickerCombinationNavigationFunctionality() {
    this.verifyHandPickedCombinationNavigationButton(1, true);
    this.handPickedCombinationNavigationAction(1);
    this.verifyHandPickedCombinationNavigationButton(2, false);
    this.handPickedCombinationNavigationAction(0);
    this.verifyHandPickedCombinationNavigationButton(1, false);
    this.handPickedCombinationNavigationAction(1);
    this.verifyHandPickedCombinationNavigationButton(2, false);
    this.handPickedCombinationNavigationAction(1);
    this.verifyHandPickedCombinationNavigationButton(3, false);
    this.handPickedCombinationNavigationAction(0);
    this.verifyHandPickedCombinationNavigationButton(2, false);
  }

  /**
   * This method verify if the horizontal scroll is displayed when the horizontal view port is less than 900.
   * Verify also if in this situação the navigation button from the slider are not displayed.
   */
  handPickerCombinationNavigationHorizontalScroll() {
    this.elements.handPickedCombinationHorizontalScroll().scrollTo("right");
    this.elements.handPickedCombinationNavLeftButton().should("be.not.visible");
    this.elements.handPickedCombinationNavRightButton().should("be.not.visible");
  }

/**
 * This method verify the content of the atricles from the slider Hand-picked combination
 * He verify the format of the article
 * The discount price if exists
 * The review if exists
 * If the article have a description,a title a picture
 */
  verifyArticlesContent() {
    let nArticle = 1;
    let discount,preDiscount,discountedPrice;
    this.elements.handPickedCombinationArticles().each(($el) => {
      if (nArticle % 3 == 0 && nArticle <= 6) {
        this.handPickedCombinationNavigationAction(1);
      }
      cy.wrap($el).within(() => {
        this.elements.articlePicture().should("be.visible");
        this.elements.articleTitle().should("be.visible");
        if ($el.find("p[class='text-ink200 text-14 my0 line-clamp-2']").length) {
            this.elements.articleDescriptionText().should("be.visible");
        }else{
            this.elements.articleDescriptionList().should("be.visible");
        }
        this.elements.articleFooter().then($footer => {
            if ($footer.find(".flex items-center ").length) {
                this.elements.articleReviewScore().should("be.visible");
                this.elements.articleNumberOfReview().should("be.visible");
            }
        });
        this.elements.articlePriceFrom().should("be.visible").and("contain.text","From");
        if ($el.find("span[class*='round-corners-16 text-12']").length) {
            this.elements.articleDiscount().should("be.visible").invoke('text').as('discount');
            this.elements.articlePreDiscount().should("be.visible").invoke('text').as('preDiscount');
            cy.get("span").then(() => {
                 cy.get('@discount').then($discount => {
                    discount=$discount.replace(/^\D+|%/g, '');
                  });
                 cy.get('@preDiscount').then($preDiscount => {
                    preDiscount=$preDiscount.replace(/^\D+|%/g, '');
                });
            });
            this.elements.articlePriceDiscounted().invoke('text').as('price').then(async() => {
                await cy.get('@price').then(async $price => {
                    $price=$price.replace(/^\D+|%/g, '');
                    discountedPrice=await this.verifyPrice(discount,preDiscount);
                    const margin= parseFloat(preDiscount.replace(/^\D+|%/g, '')*0.005).toFixed(2);
                    if($price>=(discountedPrice-margin) && $price <= parseFloat(discountedPrice)+parseFloat(margin)){
                        cy.log("The discount price match ",$price);   
                    }else{
                        throw new Error("The price is not correctly discounted");
                    }
                  });
            });
        }else{
            this.elements.articlePrice().should("be.visible");
        }
      });
      
      nArticle++;
    });
  }

 /**
  * This method allow the calculation of discounted price
  * @param {string} discount the discount of an article
  * @param {string} preDiscount the value of an article without discount
  * @returns {number} return the actual price with the discount
  */
 async verifyPrice(discount,preDiscount) {
    discount= 1.00 - discount/100;
    return (preDiscount*discount).toFixed(2);
  }
}

module.exports = new cityPage();
