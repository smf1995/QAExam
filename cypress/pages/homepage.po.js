class homePage{

    elements ={
        searchField : () => cy.get("input[placeholder='Search destinations & experiences']"),
        listResult : () => cy.get("li[class='react-autosuggest__suggestion']")    }

    /**
     * This method allows you to search through entered text and select a match by autocomplete or press on the enter key
     * @param {string} search Text to search
     * @param {boolean} list if false to the seach by {enter} key if true check on the list and click on the item
     */
    search(search,list=true){
        this.elements.searchField().type(search);
        if(list){
        this.elements.listResult().each(($item) => {
            cy.wrap($item).within(() => {
                 cy.get("span").then(($value)=>{
                    if($value.text() === search){
                        cy.wrap($item).click();
                    }
                 })
                
            })
        
          })
        }else{
            this.elements.searchField().type('{enter}');
        }
    }

    /**
     * This method change the view port to the introduced one
     * @param {integer} x horizontal px
     * @param {integer} y verical px
     */
    setViewPort(x,y){
        cy.viewport(x,y);
    }
}

module.exports = new homePage();