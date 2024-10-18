import { makeStyles } from "@mui/styles";
import { Theme } from './Theme'
import headerImage from './image/Header.jpg'
import { createTheme } from "@mui/material";
import service1 from './image/service1.png'
import service2 from './image/service2.png'
import service3 from './image/service3.png'
import service4 from './image/service4.png'
import dots from './image/dots.jpg'


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const useStyles = makeStyles(() => ({
    //image responsive
    imgResponsive: {
        width: "100%",
        height: "auto",
    },

    //navbar
    navbar_section_active: {
        position: "fixed !important",
        width: "100%",
        height: "auto",
        top: 0,
        left: 0,
        background: "#ffffff !important",
        zIndex: 9999,
        transition: "all 0.3s ease",
        boxShadow: "0px 0px 10px rgb(0 0 0 / 10%)",
        "& .makeStyles-navlink-7": {
            padding: "30px 0px !important",
        },
        "& .makeStyles-menu_icon-9": {
            padding: "20px 0px !important",
        },
    },
    navbar_section: {
        position: "absolute !important",
        width: "100%",
        height: "auto",
        top: 0,
        left: 0,
        background: "transparent",
        transition: "all 0.3s ease",
        zIndex: 9999,
    },
    navbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center !important",
    },
    logo: {
        display: "flex",
        alignItems: "center",
    },
    logo_image: {
        display: "inline-block",
        transition: "all 0.3s ease-in-out 0s",
        height: "auto",
        maxWidth: "110px",
        maxHeight: "70px",
    },
    navlink: {
        textDecoration: "none !important",
        color: Theme.colors.colorvariable,
        fontSize: "16px !important",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        padding: "40px 0px !important",
        margin: "0px 48px 0px 0px !important",
        display: "inline-block !important",
        transition: "all 0.3s ease",
        textTransform: "none !important",
        "&:hover": {
            color: Theme.colors.maincolor,
        },
    },
    download_cv_button: {
        textDecoration: "none !important",
        color: Theme.colors.colorvariable,
        background: "transparent !important",
        fontSize: "16px !important",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        padding: "8px 35px 7px 35px !important",
        [theme.breakpoints.up("sm")]: {
            display: "inline-block !important",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none !important",
        },
        transition: "all 0.3s ease",
        position: "relative !important",
        overflow: "hidden !important",
        border: `2px solid ${Theme.colors.maincolor}`,
        borderRadius: "50px !important",
        zIndex: 10,
        "&:before": {
            position: "absolute",
            content: "''",
            background: Theme.colors.maincolor,
            left: "-5px",
            right: "-5px",
            bottom: '-5px',
            height: "0px",
            transition: "all .3s ease",
            zIndex: -1,
        },
        "&:hover": {
            color: Theme.colors.bswhite,
            "&:before": {
                height: "115%",
            },
        },
    },
    menu_icon: {
        color: Theme.colors.colorvariable,
        "& svg": {
            width: "35px", height: "35px",
        },
        [theme.breakpoints.up("md")]: {
            display: "none !important",
        },
        [theme.breakpoints.down("sm")]: {
            display: "inline-block !important",
        },
        padding: "29px 0px !important",
        transition: "all 0.3s ease",
    },
    drawer_mobail_menu: {
        position: "relative",
        display: "flex",
        flexFlow: "column",
        zIndex: 9999999,
        width: "250px",
        height: "100%",
        padding: "50px 25px !important",
        color: Theme.colors.bswhite,
        background: Theme.colors.maincolor,
        "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            backdropFilter: "blur(10px) !important",
        },
    },
    menu_icon_close: {
        color: Theme.colors.bswhite,
        "& svg": {
            width: "35px", height: "35px",
        },
        position: "absolute !important",
        top: "15px",
        right: "15px"
    },
    mobail_menu_link: {
        textDecoration: "none !important",
        color: Theme.colors.bswhite,
        fontSize: "18px !important",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        lineHeight: "18px",
        padding: "15px 0px !important",
        display: "inline-block !important",
        transition: "all 0.3s ease",
        textTransform: "none !important",
        "&:hover": {
            color: Theme.colors.bswhite,
        },
    },

    //Header Section
    header_section: {
        height: "100vh",
        [theme.breakpoints.only("xs")]: {
            height: "1000px",
        },
        padding: "0px",
        margin: "0px",
        background: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll !important",
        backgroundPosition: "50% 50%",
        boxShadow: `0 0 0 0 ${Theme.colors.bswhite}`,
        display: "flex !important",
        alignItems: "center !important",
        position: "relative",
        zIndex: 1,
    },
    header_items: {
        display: "flex !important",
        flexWrap: "wrap",
        alignItems: "center !important",
        position: "relative",
    },
    avater_text: {
        display: "flex !important",
        flexFlow: "column",
        justifyContent: "center !important",
        position: "relative",
    },
    sppb_addon_sup_title: {
        fontFamily: 'Jost  !important',
        fontSize: "25px !important",
        fontWeight: "500 !important",
        lineHeight: "1.3 !important",
        color: Theme.colors.maincolor,
    },
    sppb_addon_title: {
        fontFamily: 'Jost  !important',
        fontSize: "60px !important",
        fontWeight: "500 !important",
        lineHeight: "1.3 !important",
        color: Theme.colors.colorvariable,
        margin: "0px 0px 13px 0px !important",
        textTransform: "none",
        padding: "0px 0px 0px 0px !important",
    },
    sppb_addon_sub_title: {
        fontFamily: 'Open Sans',
        fontSize: "19px !important",
        fontWeight: "500 !important",
        lineHeight: "24px !important",
        color: Theme.colors.colorvariable,
        marginBottom: "23px !important",
    },
    greenText: {
        color: " #1cbe59 !important",
    },
    purpleText: {
        color: "#8067f0 !important",
    },
    sppb_addon_description: {
        fontFamily: 'Open Sans',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "24px !important",
        color: Theme.colors.des,
        marginBottom: "23px !important",
        wordWrap: " break-word",
    },
    hero_section_button: {
        margin: "30px 0px 0px 0px !important",
        display: "flex",
        [theme.breakpoints.only("xs")]: {
            display: "block !important",
            alignItems: "start",
        },
        alignItems: "center"
    },
    hero_about_button: {
        textDecoration: "none !important",
        color: Theme.colors.bswhite,
        background: "transparent !important",
        fontSize: "16px !important",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        padding: "8px 35px 7px 35px !important",
        display: "inline-block !important",
        transition: "all 0.3s ease",
        position: "relative !important",
        overflow: "hidden !important",
        border: `2px solid ${Theme.colors.maincolor}`,
        borderRadius: "50px !important",
        zIndex: 10,
        "&:before": {
            position: "absolute",
            content: "''",
            background: Theme.colors.maincolor,
            left: "-5px",
            right: "-5px",
            bottom: '-5px',
            height: "115%",
            transition: "all .3s ease",
            zIndex: -1,
        },
        "&:hover": {
            color: Theme.colors.colorvariable,
            "&:before": {
                height: "0%",
            },
        },
    },
    hero_sosial: {
        display: "flex",
        flexFlow: "row wrap",
        gap: "15px",
        margin: "0px 0px 0px 50px",
        [theme.breakpoints.only("xs")]: {
            margin: "20px 0px 0px 0px",
        },
    },
    hero_sosial_icon: {
        color: Theme.colors.colorvariable,
        fontSize: "18px !important",
        textDecoration: "none",
    },

    svg_image_section: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-120px",
        zIndex: 5,
        [theme.breakpoints.only("xs")]: {
            display: "none !important",
        },
        [theme.breakpoints.only("sm")]: {
            display: "none !important",
        },
    },
    svg_image_link: {
        textDecoration: "none",
        color: Theme.colors.colorvariable,
    },
    avater_section: {
        display: 'flex',
        position: ' relative',
        transition: 'all .4s ease',
        justifyContent: "center",
        //flexFlow:"column",
        [theme.breakpoints.only("xs")]: {
            margin: "0px 0px 20px 0px !important",
        },
    },
    image_avater: {
        maxWidth: "100%",
        maxHeight: "400px",
        height: "auto",
    },
    svg_illastator: {
        position: "absolute",
        top: "20px",
        left: "100px",
        width: "50px",
        height: "50px",
        [theme.breakpoints.only('xs')]: {
            // top: "80px",
            left: "16px",
            width: "37px",
            height: "37px",
        },
        display: "inline-block",
        background: Theme.colors.svgbak1,
        borderRadius: "8px",
        boxShadow: "24px 0 72px rgb(54 32 152 / 30%)",
        animation: "anim_moveBottom 3s linear 0s infinite alternate",
        "& svg": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "25px",
            height: "25px",
            color: Theme.colors.svgcolor1,
        },
    },
    svg_photoshop: {
        position: "absolute",
        top: "80px",
        left: "410px",
        width: "50px",
        height: "50px",
        [theme.breakpoints.only('xs')]: {
            top: "80px",
            left: "247px",
            width: "37px",
            height: "37px",
        },
        display: "inline-block",
        background: Theme.colors.colorvariable,
        borderRadius: "8px",
        boxShadow: "24px 0 72px rgb(54 32 152 / 30%)",
        animation: "anim_moveBottom 3s linear 0s infinite alternate",
        "& svg": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "25px",
            height: "25px",
            color: Theme.colors.svgcolor2,
        },
    },
    svg_figma: {
        position: "absolute",
        bottom: "20px",
        left: "220px",
        width: "50px",
        height: "50px",
        [theme.breakpoints.only('xs')]: {
            bottom: "40px",
            left: "107px",
            width: "37px",
            height: "37px",
        },
        display: "inline-block",
        background: Theme.colors.bswhite,
        borderRadius: "8px",
        boxShadow: "24px 0 72px rgb(54 32 152 / 30%)",
        animation: "anim_moveBottom 3s linear 0s infinite alternate",
        "& svg": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "25px",
            height: "25px",
            color: Theme.colors.svgcolor1,
        },
    },

    //Extrea sectipn
    extra_section: {
        paddingTop: "130px !important",
        [theme.breakpoints.only("xs")]: {
            paddingTop: "110px !important",
        },
    },
    extra_img_section: {
        display: "flex",
        position: "relative",
        transition: "all 0.4s ease",
    },
    extra_img_1: {
        maxWidth: "90px",
    },
    extra_img_2: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "45px",
        height: "45px",
        transform: "translate(-50%,-50%)",
    },
    extra_text_section: {
        textAlign: "center",
        paddingTop: "30px",
        [theme.breakpoints.only("xs")]: {
            paddingBottom: "50px",
        },
    },
    extra_text_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "24px !important",
        fontWeight: "500 !important",
        lineHeight: "1.3 !important",
        marginBottom: "20px !important",
    },
    extra_text_description: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
        wordWrap: "break-word",
    },

    //about_section
    about_section: {
        paddingTop: "180px",
        position: "relative",
    },
    about_section_left_image: {
        position: "absolute",
        top: "0px",
        left: "40px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },
    about_left_image: {},
    about_section_right_image: {
        position: "absolute",
        right: "0px",
        bottom: "-90px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },
    about_right_image: {},
    about_image_section: {
        [theme.breakpoints.up("md")]: {
            paddingRight: "45px",
        },
        position: "relative",
    },
    about_image: {
        width: "100%",
        maxHeight: "800px",
        height: "auto",
    },
    about_image_extra_1: {
        position: "absolute",
        top: "120px",
        left: "-10px",
    },
    about_image_extra_2: {
        position: "absolute",
        top: "313px",
        left: "223px",
        [theme.breakpoints.only("xs")]: {
            top: "281px",
            left: "170px",
        },
    },
    about_image_extra_text: {
        background: Theme.colors.bswhite,
        boxShadow: "25px 0px 65px 0px rgb(54 32 152 / 11%)",
        borderRadius: "8px",
        padding: "25px 30px 21px 26px !important",
        [theme.breakpoints.only("xs")]: {
            padding: "18px 20px 18px 20px !important",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    about_image_extra_text_title_1: {
        color: Theme.colors.color1,
        fontFamily: 'Jost  !important',
        fontSize: "50px !important",
        fontWeight: "500 !important",
        lineHeight: "66px !important",
    },
    about_image_extra_text_title_2: {
        color: Theme.colors.color2,
        fontFamily: 'Jost  !important',
        fontSize: "50px !important",
        fontWeight: "500 !important",
        lineHeight: "66px !important",
    },
    about_image_extra_text_subtitle: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "18px !important",
        fontWeight: "500 !important",
        lineHeight: "24px !important",
        margin: "0px 0px 0px 17px !important",
    },
    about_text_section: {

        [theme.breakpoints.up("md")]: {
            paddingLeft: "45px !important",
        },
        [theme.breakpoints.only("sm")]: {
            paddingTop: "45px !important",
        },
        [theme.breakpoints.only("xs")]: {
            paddingTop: "35px !important",
        },
    },
    about_text_subTitle: {
        color: Theme.colors.maincolor,
        fontFamily: 'Jost  !important',
        fontSize: "22px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 6px 0px !important",
    },
    about_text_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "40px !important",
        fontWeight: "500 !important",
        lineHeight: "50px !important",
        margin: "0px 0px 25px 0px !important",
    },
    about_text_description: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 47px 0px !important",
    },

    //portfolio section
    portfolio: {
        paddingTop: "185px",
        position: "relative",
    },
    portfolio_text_area: {
        textAlign: "center",
        [theme.breakpoints.only("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.only("xs")]: {
            width: "90%",
        },
        width: "50%",
    },

    portfolio_button_group: {
        display: "flex !important",
        flexWrap: "wrap !important",
        [theme.breakpoints.only("xs")]: {
            justifyContent: "space-between !important",
            gap: "0px",
        },
        justifyContent: "center !important",
        margin: "30px 0px 60px 0px !important",
        gap: "40px",
    },
    portfolio_link: {
        // display: "flex !important",
        // flex: "1",
        textDecoration: "none !important",
        color: Theme.colors.colorvariable,
        fontSize: "16px !important",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        padding: "10px 0px !important",
        transition: "all 0.3s ease",
        textTransform: "none !important",
        "&:hover": {
            color: Theme.colors.maincolor,
        },
    },

    portfolio_box_section: {
        //
    },
    portfolio_image_box: {
        position: "relative",
        overflow: "hidden",
    },
    portfolio_image_box_image: {
        display: "block",
        maxWidth: "100%",
        height: "auto",
        transform: "scale3d(1,1,1)",
    },
    portfolio_text_link: {
    },
    portfolio_text_box: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: "center",
        padding: "10px",
        background: "rgba(0, 0, 0, .5)",
        color: "#fff",
        zIndex: 2,
        opacity: 0,
        transition: "all 0.8s ease-out",
        "&:hover": {
            opacity: 1,
        },
    },
    portfolio_text_box_area: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.8s ease-out",
    },
    portfolio_text_box_title: {
        color: Theme.colors.bswhite,
        fontFamily: 'Jost  !important',
        fontSize: "26px !important",
        fontWeight: "600 !important",
        transition: "all 0.12s ease-out",
    },
    portfolio_text_box_description: {
        color: Theme.colors.bswhite,
        fontFamily: 'Jost  !important',
        fontSize: "18px !important",
        fontWeight: "500 !important",
        marginTop: "15px !important",
        transition: "all 0.15s ease-out",
    },
    portfolio_section_left_image: {
        position: "absolute",
        top: "250px",
        left: "40px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },
    portfolio_section_right_image: {
        position: "absolute",
        right: "0px",
        bottom: "-150px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },

    //skill
    skill: {
        paddingTop: "250px !important",
    },
    skill_left: {
        [theme.breakpoints.only("sm")]: {
            paddingRight: "0px !important",
        },
        [theme.breakpoints.only("xs")]: {
            paddingRight: "0px !important",
        },
        paddingRight: "85px !important",
    },
    skill_text_area: {},
    skill_right: {
        [theme.breakpoints.only("sm")]: {
            paddingLeft: "0px !important",
        },
        [theme.breakpoints.only("xs")]: {
            paddingLeft: "0px !important",
        },
        paddingLeft: "85px !important",
    },
    skill_image: {
        maxHeight: "800px important",
        height: "auto",
        width: "100%",
    },
    progressbar_group: {},
    progressbar: {
        margin: "0px 0px 20px 0px !important",
    },
    progressbar_label: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "18px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        "& span": {
            float: "right",
        },
        marginBottom: "10px !important",
    },
    progressbar_main: {
        background: "#e7e5f1 !important",
        height: "8px !important",
        borderRadius: "4px !important",
        '& .MuiLinearProgress-bar': {
            // backgroundColor: Theme.colors.maincolor,
        },
    },

    //servicess
    service: {
        paddingTop: "170px !important",
        position: "relative",
    },
    service_section_right_image: {
        position: "absolute",
        top: "0px",
        right: "0px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },
    service_section_left_image: {
        position: "absolute",
        top: "300px",
        left: "0px",
        [theme.breakpoints.only("sm")]: {
            display: "none",
        },
        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
        zIndex: -1,
    },
    service_left_image: {},
    services_text_area: {
        textAlign: "center",
        [theme.breakpoints.only("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.only("xs")]: {
            width: "90%",
        },
        width: "50%",
    },
    service_box_area: {
        paddingTop: "60px !important",
    },
    service_box: {
        display: "flex",
        background: Theme.colors.bswhite,
        width: "100%",
        boxShadow: "18px 0px 87px 0px rgb(10 15 70 / 7%)",
        borderRadius: "12px",
        padding: "65px 65px 65px 65px",
        [theme.breakpoints.only("xs")]: {
            flexFlow: "column",
        },
    },
    service_pull_left: {
        float: "left",
        margin: "0px 35px 0px 0px",
        position: "relative",
        [theme.breakpoints.only("xs")]: {
            margin: "0px 0px 35px 0px !important",
        },
    },
    sppb_img_container: {
        position: "relative",
        width: "95px",
        height: "95px",
        display: "block",

    },
    service_image: {
        width: "45px",
        height: "45px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
        zIndex: 2,
        color: "#E8060A",
    },
    service_pull_right: {},
    service_pull_right_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost !important',
        fontSize: "25px !important",
        fontWeight: "500 !important",
        lineHeight: "22px !important",
        textDecoration: "none !important",
        transition: "all 0.15s ease-in-out",
        "&:hover": {
            color: Theme.colors.maincolor,
            transition: "all 0.15s ease-out",
        },
    },
    service_pull_right_subtitle: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost !important',
        fontSize: "18px !important",
        fontWeight: "500 !important",
        lineHeight: "22px !important",
        marginBottom: "19px !important",
        marginTop: "10px !important",
        display: "block !important",
        "& span": {
            color: Theme.colors.maincolor,
            fontSize: "20px !important",
        },
    },
    service_pull_right_des: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
    },
    sppb_img_container_after_1: {
        "&:after": {
            position: "absolute",
            maxWidth: "95px",
            top: "0px",
            content: `url(${service1})`,
        },
    },
    sppb_img_container_after_2: {
        "&:after": {
            position: "absolute",
            maxWidth: "95px",
            top: "0px",
            content: `url(${service2})`,
        },
    },
    sppb_img_container_after_3: {
        "&:after": {
            position: "absolute",
            maxWidth: "95px",
            top: "0px",
            content: `url(${service3})`,
        },
    },
    sppb_img_container_after_4: {
        "&:after": {
            position: "absolute",
            maxWidth: "95px",
            top: "0px",
            content: `url(${service4})`,
        },
    },

    //Testimonials
    testimonial: {
        paddingTop: "160px !important",
    },
    testimonial_text_area: {
        textAlign: "center",
        [theme.breakpoints.only("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.only("xs")]: {
            width: "90%",
        },
        width: "50%",
    },
    textimonial_section: {
        paddingTop: "30px !important",
    },
    textimonial_group: {
        display: "flex !important",
        flexFlow: "column",
        padding: "0px 10px !important",
    },
    textimonial_icon: {
        fontSize: "85px",
        color: Theme.colors.maincolor,
        marginBottom: "35px !important",
        textAlign: "center"
    },
    textimonial_text: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "19px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        marginBottom: "51px !important",
        fontStyle: "italic !important",
        padding: "0px 100px !important",
        [theme.breakpoints.only("sm")]: {
            padding: "0px 20px !important",
        },
        [theme.breakpoints.only("xs")]: {
            padding: "0px 10px !important",
        },
        textAlign: "center"
    },
    textimonial_avater_section: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textimonial_avater_img: {
        width: "60px",
        height: "60px",
        marginRight: "25px",
        "& img": {
            borderRadius: "100px",
            width: "100%",
            height: "auto",
        },
    },
    textimonial_avater_text: {},
    textimonial_avater_text_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost !important',
        fontSize: "22px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
    },
    textimonial_avater_text_subtitle: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
    },

    //Boag
    blog: {
        paddingTop: "160px !important",
    },
    blog_text_area: {
        textAlign: "center",
        [theme.breakpoints.only("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.only("xs")]: {
            width: "90%",
        },
        width: "50%",
    },
    blog_section: {
    },
    blog_section_image: {
        "& img": {
            height: "239px !important",
            width: "100%",
            borderRadius: "12px",
        },
        position: "relative",
    },
    blog_section_date: {
        position: "relative",
        position: "absolute",
        top: "18px",
        right: "18px",
        zIndex: 2,
        display: "inline-block",
        backgroundColor: "#1cbe59",
        borderRadius: "12px",
        textAlign: "center",
        padding: "15px 20px 15px 20px !important",
        lineHeight: 1,
        maxWidth: "66px",
        color: "#fff",
        fontSize: "22px",
        fontFamily: 'Jost  !important',
        fontWeight: "500 !important",
        "& span": {
            fontSize: "16px",
            display: "block",
            fontFamily: 'Jost  !important',
            fontWeight: "400 !important",
            marginTop: "3px !important",
        },
    },
    blog_section_text: {
        paddingTop: "20px !important",
    },
    blog_section_text_subtitle: {
        fontFamily: 'Jost  !important',
        fontSize: "16px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 6px 0px !important",
        "& a": {
            color: Theme.colors.maincolor,
            textDecoration: "none",
            transition: "all 0.5s ease 0s",
        }
    },
    blog_section_text_title: {
        fontFamily: 'Jost  !important',
        fontSize: "21px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 25px 0px !important",
        "& a": {
            color: Theme.colors.colorvariable,
            textDecoration: "none",
            transition: "all 0.5s ease 0s",
        },
        "&:hover a": {
            color: Theme.colors.maincolor,
        }
    },

    //newslatter
    newslatter: {
        padding: "185px 0px 47px 0px !important",
        position: "relative",
    },
    newslatter_box: {
        paddingTop: "83px",
        paddingRight: "90px",
        paddingBottom: "86px",
        paddingLeft: "90px",
        backgroundImage: `url(${dots})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "50% 50%",
        boxShadow: "0 0 0 0 #ffffff",
        position: "relative",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        zIndex: -1,
    },
    newslatter_box_color: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
        zIndex: -1,
        background: "rgba(128,103,240,.92)"
    },
    newslatter_box_content: {
        zIndex: 5,
    },
    newslatter_text_area: {},
    newslatter_text_area_subtitle: {
        color: Theme.colors.bswhite,
        fontFamily: 'Jost  !important',
        fontSize: "22px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 6px 0px !important",
    },
    newslatter_text_area_title: {
        color: Theme.colors.bswhite,
        fontFamily: 'Jost  !important',
        fontSize: "40px !important",
        fontWeight: "500 !important",
        lineHeight: "50px !important",
        margin: "0px 0px 20px 0px !important",
    },
    newslatter_text_area_description: {
        color: Theme.colors.bswhite,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
    },


    //contact
    contact: {
        padding: "140px 0px 47px 0px !important",
    },
    contact_text_area: {
        textAlign: "center",
        [theme.breakpoints.only("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.only("xs")]: {
            width: "90%",
        },
        width: "50%",
    },
    contact_info_section: {
        padding: "50px 0px 0px 0px !important",
    },
    contact_information: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    contact_info_left: {
        marginRight: "15px",
    },
    contact_info_icon: {
        boxHhadow: "0 0 0 0 #ffffff",
        display: "inline-block",
        textAlign: "center",
        padding: "0 0 0 0",
        borderWidth: "0px",
        width: "88px",
        height: "88px",
        lineHeight: "88px",
        borderRadius: "100%",
        position: "relative",
        "& i": {
            fontSize: "24px",
            width: "24px",
            height: "24px",
            lineHeight: "24px",
        },
    },
    contact_ingo_right: {
        paddingRight: "10px",
        "& a": {
            "&:hover": {
                color: Theme.colors.maincolor,
            },
        },
    },
    contact_ingo_right_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "30px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 5px 0px !important",
    },
    contact_ingo_right_description: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
        textDecoration: "none",
    },
    //contact form
    contact_form: {},

    //google map
    googleMap: {
        padding: "130px 0px 47px 0px !important",
    },
    google_map_section: {},

    //footer
    footer: {
        paddingTop: "47px !important",
        paddingRight: "0px",
        paddingBottom: "61px",
        paddingLeft: "0px",
        marginTop: "100px",
        marginRight: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        backgroundColor: "#f2f5fb",
        boxSHadow: "0 0 0 0 #ffffff",
        [theme.breakpoints.only("xs")]:{
            paddingTop: "37px !important",
            paddingBottom: "41px !important",
        },
        [theme.breakpoints.only("sm")]:{
            paddingTop: "37px !important",
            paddingBottom: "41px !important",
        },
    },
    footer_box: {
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.only("xs")]:{
            flexFlow:"column",
        },
        [theme.breakpoints.only("sm")]:{
            flexFlow:"column",
        },
    },
    footer_box_left: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
        "& a":{
            fontWeight: "700 !important",
            textDecoration:"none !important",
            color: Theme.colors.color3,
            cursor:"pointer",
            "&:hover":{
                color: Theme.colors.maincolor,
            },
        },
        [theme.breakpoints.only("xs")]:{
            textAlign:"center",
        },
        [theme.breakpoints.only("sm")]:{
            textAlign:"center",
        },
    },
    footer_box_right: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
        "& a":{
            textDecoration:"none !important",
            color: Theme.colors.color3,
            margin:"0px 20px !important",
            cursor:"pointer",
            "&:hover":{
                color: Theme.colors.maincolor,
            },
        },
        [theme.breakpoints.only("sm")]:{
            display:"none !important",
        },
        [theme.breakpoints.only("xs")]:{
            display:"none !important",
        },
    },
    //scroll to top button css
    scroll_to_top:{
        color:Theme.colors.bswhite,
        background:Theme.colors.maincolor,
        transition:"0.7s !important",
    },


    //common css
    common_text_area: {
        padding: "0px 0px 47px 0px !important",
        margin: "0 auto !important",
    },
    common_text_area_subtitle: {
        color: Theme.colors.maincolor,
        fontFamily: 'Jost  !important',
        fontSize: "22px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        margin: "0px 0px 6px 0px !important",
    },
    common_text_area_title: {
        color: Theme.colors.colorvariable,
        fontFamily: 'Jost  !important',
        fontSize: "40px !important",
        fontWeight: "500 !important",
        lineHeight: "50px !important",
        margin: "0px 0px 20px 0px !important",
    },
    common_text_area_description: {
        color: Theme.colors.des,
        fontFamily: 'Open Sans !important',
        fontSize: "16px !important",
        fontWeight: "400 !important",
        lineHeight: "30px !important",
    },


}))