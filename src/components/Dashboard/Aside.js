import React from "react";
import AsideList from "./AsideList";
import icHome from "../../Assets/Images/ic-home.svg";
import icCorn from "../../Assets/Images/ic-corn.svg";
import icDownArrow from "../../Assets/Images/ic-down-arrow.svg";
import icSoybeans from "../../Assets/Images/ic-soybeans.svg";
import icNutrients from "../../Assets/Images/ic-nutrients.svg";
import icAdditionalProducts from "../../Assets/Images/ic-additional-products.svg";
import icQuotes from "../../Assets/Images/ic-quotes.svg";
import icFeathuredProducts from "../../Assets/Images/ic-feathured-products.svg";
import icWatch from "../../Assets/Images/ic-watch.svg";
import icAds from "../../Assets/Images/ic-ads.svg";
import icNavUser from "../../Assets/Images/ic-nav-user.svg";
import icMenu from "../../Assets/Images/ic-menu.svg";



const stockDataNav = [
    {
        mainListId:'flush-heading1',
        dataBsTarget:'#flush-collapse1',
        ariaControls:'flush-collapse1',
        imgSrc:icHome,
        subListId:'flush-collapse1',
        title:'Dashboard',
    },
    {
        mainListId: 'flush-headingOne', 
        dataBsTarget:'#flush-collapseOne', 
        ariaControls:'flush-collapseOne' ,
        ariaLabelledby:'flush-headingOne' ,
        imgSrc:icCorn,
        subListId:'flush-collapseOne', 
        title:'Corn',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingTwo',
        dataBsTarget:'#flush-collapseTwo',
        ariaControls:'flush-collapseTwo',
        ariaLabelledby:'flush-headingTwo',
        imgSrc:icSoybeans,
        subListId:'flush-collapseTwo',
        title:'Soybeans',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingThree',
        dataBsTarget:'#flush-collapseThree',
        ariaControls:'flush-collapseThree',
        ariaLabelledby:'flush-headingThree',
        imgSrc:icNutrients,
        subListId:'flush-collapseThree',
        title:'Nutrients',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingFour',
        dataBsTarget:'#flush-collapseFour',
        ariaControls:'flush-collapseFour',
        ariaLabelledby:'flush-headingFour',
        imgSrc:icAdditionalProducts,
        subListId:'flush-collapseFour',
        title:'Additional Products',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingFive',
        dataBsTarget:'#flush-collapseFive',
        ariaControls:'flush-collapseFive',
        ariaLabelledby:'flush-headingFive',
        imgSrc:icQuotes,
        subListId:'flush-collapseFive',
        title:'Price Quotes',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingSix',
        dataBsTarget:'#flush-collapseSix',
        ariaControls:'flush-collapseSix',
        ariaLabelledby:'flush-headingSix',
        imgSrc:icFeathuredProducts,
        subListId:'flush-collapseSix',
        title:'Feathured Products',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingSeven',
        dataBsTarget:'#flush-collapseSeven',
        ariaControls:'flush-collapseSeven',
        ariaLabelledby:'flush-headingSeven',
        imgSrc:icWatch,
        subListId:'flush-collapseSeven',
        title:'Video',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingEight',
        dataBsTarget:'#flush-collapseEight',
        ariaControls:'flush-collapseEight',
        ariaLabelledby:'flush-headingEight',
        imgSrc:icAds,
        subListId:'flush-collapseEight',
        title:'Ads',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingNine',
        dataBsTarget:'#flush-collapseNine',
        ariaControls:'flush-collapseNine',
        ariaLabelledby:'flush-headingNine',
        imgSrc:icNavUser,
        subListId:'flush-collapseNine',
        title:'User',
        imgSrcArrow:icDownArrow,
    },
    {
        mainListId:'flush-headingTen',
        dataBsTarget:'#flush-collapseTen',
        ariaControls:'flush-collapseTen',
        ariaLabelledby:'flush-headingTen',
        imgSrc:icMenu,
        subListId:'flush-collapseTen',
        title:'Menu',
        imgSrcArrow:icDownArrow,
    }
    
  ];
  
  const navItems = () => {
    let navItemsContent = [];
    
    for (let i = 0; i < stockDataNav.length; i++) {
        console.log('Ali', stockDataNav[i].imgSrc.icHome);
        navItemsContent.push(
        <AsideList 
            mainListId={stockDataNav[i].mainListId}
            dataBsTarget={stockDataNav[i].dataBsTarget}
            ariaControls={stockDataNav[i].ariaControls}
            imgSrc={stockDataNav[i].imgSrc} 
            subListId={stockDataNav[i].subListId}
            title={stockDataNav[i].title}
            imgSrcArrow={stockDataNav[i].icDownArrow}
            />
        );
    }
    return navItemsContent;
  };


const Aside = () => {
   
   
    return (
        <>
        
            <ul className="main-navbar" id="accordionFlushExample">
                {navItems()}
            </ul>
        </>
    )
}

export default Aside;