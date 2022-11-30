import React from "react";
import AsideList from "./AsideList";
import icHome from "../../Assets/Images/ic-home.svg";
import icCorn from "../../Assets/Images/ic-corn.svg";
import icSoybeans from "../../Assets/Images/ic-soybeans.svg";
import icNutrients from "../../Assets/Images/ic-nutrients.svg";
import icAdditionalProducts from "../../Assets/Images/ic-additional-products.svg";
import { useNavigate } from "react-router-dom";

import icDownArrow from "../../Assets/Images/ic-down-arrow.svg";
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
        navgateTo: "/admin"
        // subMenu: ["Item 1", "Item 2"],
    },
    {
        mainListId: 'flush-headingOne', 
        dataBsTarget:'#flush-collapseOne', 
        ariaControls:'flush-collapseOne' ,
        ariaLabelledby:'flush-headingOne' ,
        imgSrc:icCorn,
        subListId:'flush-collapseOne', 
        title:'Client Request',
        navgateTo: "/clientsRequest",
        imgSrcArrow:icDownArrow,
        // subMenu: ["Item 3", "Item 4"],
    },
    {
        mainListId:'flush-headingTwo',
        dataBsTarget:'#flush-collapseTwo',
        ariaControls:'flush-collapseTwo',
        ariaLabelledby:'flush-headingTwo',
        imgSrc:icSoybeans,
        subListId:'flush-collapseTwo',
        title:'Active Jobs',
        navgateTo: "/activeJobs",
        // subMenu: ["Item 5", "Item 6"],
    },
    {
        mainListId:'flush-headingThree',
        dataBsTarget:'#flush-collapseThree',
        ariaControls:'flush-collapseThree',
        ariaLabelledby:'flush-headingThree',
        imgSrc:icNutrients,
        subListId:'flush-collapseThree',
        title:'Finished Jobs',
        navgateTo: "/finishedJobs",
        // subMenu: ["Item 7", "Item 8"],
    },
    {
        mainListId:'flush-headingFour',
        dataBsTarget:'#flush-collapseFour',
        ariaControls:'flush-collapseFour',
        ariaLabelledby:'flush-headingFour',
        imgSrc:icAdditionalProducts,
        subListId:'flush-collapseFour',
        title:'Job Description',
        navgateTo: "/jobDescription",
        // subMenu: ["Item 9", "Item 10"],
    },
    
    
  ];

  
  const navItems = () => {
    let navItemsContent = [];
    
    for (let i = 0; i < stockDataNav.length; i++) {
        navItemsContent.push(
        <AsideList 
            mainListId={stockDataNav[i].mainListId}
            dataBsTarget={stockDataNav[i].dataBsTarget}
            ariaControls={stockDataNav[i].ariaControls}
            imgSrc={stockDataNav[i].imgSrc} 
            subListId={stockDataNav[i].subListId}
            title={stockDataNav[i].title}
            navigateTo={stockDataNav[i].navgateTo}
            imgSrcArrow={stockDataNav[i].icDownArrow}
            subMenu={stockDataNav[i].subMenu}

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