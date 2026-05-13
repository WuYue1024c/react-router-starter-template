// app/routes.ts
import {
    type RouteConfig,
    index,
    route,
    layout
} from "@react-router/dev/routes";

export default [
    // 使用 layout 包装，这样所有页面都会共享 Navbar, Footer 和 GoToTop
    index("pages/Home.tsx"),

    // // 基础页面
    route("contact", "pages/Contact.tsx"),
    route("online-store", "pages/Store.tsx"),
    route("business-opportunity", "pages/BusinessOpportunity.tsx"),

    // // 维修预约模块 (支持多路径指向同一个组件)
    // route("repair-online-booking", "pages/phone_and_tablet.tsx"),
    route("repair-online-booking/phone_and_tablet", "pages/phone_and_tablet.tsx"),
    route("repair-online-booking/booking-history", "pages/History.tsx"),
    route("repair-online-booking/booking_pc", "pages/BookingPC.tsx"),
    route("repair-online-booking/booking_mac", "pages/BookingMac.tsx"),

    // // 联系/关于模块
    route("contact/disclaimer_of_liability", "pages/Disclaimer.tsx"),
    route("contact/terms_conditions", "pages/TermsConditions.tsx"),
    route("contact/about_us", "pages/AboutUs.tsx"),

    // // 其他业务
    route("onsiteit", "pages/onsiteit/home.tsx"),
    route("device-rental", "pages/device_rental.tsx"),

    // // 保修政策模块
    route("warranty-terms-and-conditions", "pages/warranty/warranty-terms-and-conditions.tsx"),
    route("warranty/accessories", "pages/warranty/accessories-warranty-page.tsx"),
    route("warranty/pre-owned", "pages/warranty/pre-owned-warranty-page.tsx"),
    route("warranty/repair-policy", "pages/warranty/repair-policy-page.tsx"),
    route("warranty/laptop", "pages/warranty/pre-owned-laptop-warranty-policy-page.tsx"),
    route("warranty/custom-laptop", "pages/warranty/custom-laptop-warranty-policy-page.tsx"),

    // // 404 页面 (通配符)
    // route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;