/**
 * @template
 * if your finger so fast ( typeof HALK or F4 (film hero) fastMan ), 
 * - please convert this string objects to JSS, for using
 * - material-ui useStyles.
 */

const styles = theme => ({

});
/**
 * @convert #please -->
 */
const convertPlease = theme => ({
    '@charset "UTF-8"': true,
    '@import url("https://fonts.googleapis.com/css?family=Manrope:300,400,500,600,700&display=swap&subset=latin-ext")': true,
    ":root": {
        "--body-bg-color": "#e5ecef",
        "--theme-bg-color": "#fff",
        "--settings-icon-hover": "#9fa7ac",
        "--developer-color": "#f9fafb",
        "--input-bg": "#f8f8fa",
        "--input-chat-color": "#a2a2a2",
        "--border-color": "#eef2f4",
        "--body-font": '"Manrope", sans-serif',
        "--body-color": "#273346",
        "--settings-icon-color": "#c1c7cd",
        "--msg-message": "#969eaa",
        "--chat-text-bg": "#f1f2f6",
        "--theme-color": "#0086ff",
        "--msg-date": "#c0c7d2",
        "--button-bg-color": "#f0f7ff",
        "--button-color": "var(--theme-color)",
        "--detail-font-color": "#919ca2",
        "--msg-hover-bg": "rgba(238, 242, 244, 0.4)",
        "--active-conversation-bg":
            "linear-gradient(\r\n   to right,\r\n   rgba(238, 242, 244, 0.4) 0%,\r\n   rgba(238, 242, 244, 0) 100%\r\n  )",
        "--overlay-bg":
            "linear-gradient(\r\n   to bottom,\r\n   rgba(255, 255, 255, 0) 0%,\r\n   rgba(255, 255, 255, 1) 65%,\r\n   rgba(255, 255, 255, 1) 100%\r\n  )",
        "--chat-header-bg":
            "linear-gradient(\r\n   to bottom,\r\n   rgba(255, 255, 255, 1) 0%,\r\n   rgba(255, 255, 255, 1) 78%,\r\n   rgba(255, 255, 255, 0) 100%\r\n  )"
    },
    '[data-theme="purple"]': {
        "--theme-color": "#9f7aea",
        "--button-color": "#9f7aea",
        "--button-bg-color": "rgba(159, 122, 234, 0.12)"
    },
    '[data-theme="green"]': {
        "--theme-color": "#38b2ac",
        "--button-color": "#38b2ac",
        "--button-bg-color": "rgba(56, 178, 171, 0.15)"
    },
    '[data-theme="orange"]': {
        "--theme-color": "#ed8936",
        "--button-color": "#ed8936",
        "--button-bg-color": "rgba(237, 137, 54, 0.12)"
    },
    ".dark-mode": {
        "--body-bg-color": "#1d1d1d",
        "--theme-bg-color": "#27292d",
        "--border-color": "#323336",
        "--body-color": "#d1d1d2",
        "--active-conversation-bg":
            "linear-gradient(\r\n   to right,\r\n   rgba(47, 50, 56, 0.54),\r\n   rgba(238, 242, 244, 0) 100%\r\n  )",
        "--msg-hover-bg": "rgba(47, 50, 56, 0.54)",
        "--chat-text-bg": "#383b40",
        "--chat-text-color": "#b5b7ba",
        "--msg-date": "#626466",
        "--msg-message": "var(--msg-date)",
        "--overlay-bg":
            "linear-gradient(\r\n   to bottom,\r\n   rgba(0, 0, 0, 0) 0%,\r\n   #27292d 65%,\r\n   #27292d 100%\r\n  )",
        "--input-bg": "#2f3236",
        "--chat-header-bg":
            "linear-gradient(\r\n   to bottom,\r\n   #27292d 0%,\r\n   #27292d 78%,\r\n   rgba(255, 255, 255, 0) 100%\r\n  )",
        "--settings-icon-color": "#7c7e80",
        "--developer-color": "var(--border-color)",
        "--button-bg-color": "#393b40",
        "--button-color": "var(--body-color)",
        "--input-chat-color": "#6f7073",
        "--detail-font-color": "var(--input-chat-color)"
    },
    ".blue": {
        backgroundColor: "#0086ff"
    },
    ".purple": {
        backgroundColor: "#9f7aea"
    },
    ".green": {
        backgroundColor: "#38b2ac"
    },
    ".orange": {
        backgroundColor: "#ed8936"
    },
    "*": {
        outline: "none",
        boxSizing: "border-box"
    },
    img: {
        maxWidth: "100%"
    },
    body: {
        backgroundColor: "var(--body-bg-color)",
        fontFamily: "var(--body-font)",
        color: "var(--body-color)"
    },
    html: {
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased"
    },
    ".app": {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--theme-bg-color)",
        maxWidth: "1600px",
        height: "100vh",
        margin: "0 auto",
        overflow: "hidden"
    },
    ".header": {
        height: "80px",
        width: "100%",
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        alignItems: "center",
        padding: "0 20px"
    },
    ".wrapper": {
        width: "100%",
        display: "flex",
        flexGrow: 1,
        overflow: "hidden"
    },
    ".conversation-area,\r\n.detail-area": { width: "340px", flexShrink: 0 },
    ".detail-area": {
        borderLeft: "1px solid var(--border-color)",
        marginLeft: "auto",
        padding: "30px 30px 0 30px",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
    },
    ".chat-area": {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
    },
    ".search-bar": {
        height: "80px",
        zIndex: 3,
        position: "relative",
        marginLeft: "280px"
    },
    ".search-bar input": {
        height: "100%",
        width: "100%",
        display: "block",
        backgroundColor: "transparent",
        border: "none",
        color: "var(--body-color)",
        padding: "0 54px",
        backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23c1c7cd'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "16px",
        backgroundPosition: "25px 48%",
        fontFamily: "var(--body-font)",
        fontWeight: 600,
        fontSize: "15px"
    },
    ".search-bar input::placeholder": {
        color: "var(--input-chat-color)"
    },
    ".logo": {
        color: "var(--theme-color)",
        width: "38px", flexShrink: 0
    },
    ".logo svg": {
        width: "100%"
    },
    ".user-settings": {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        marginLeft: "auto",
        flexShrink: 0
    },
    ".user-settings > * + *": {
        marginLeft: "14px"
    },
    ".dark-light": {
        width: "22px",
        height: "22px",
        color: "var(--settings-icon-color)",
        flexShrink: 0
    },
    ".dark-light svg": {
        width: "100%",
        fill: "transparent",
        transition: "0.5s"
    },
    ".user-profile": {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    },
    ".settings": {
        color: "var(--settings-icon-color)",
        width: "22px",
        height: "22px",
        flexShrink: 0
    },
    ".conversation-area": {
        borderRight: "1px solid var(--border-color)",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    ".msg-profile": {
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "15px"
    },
    ".msg-profile.group": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--border-color)"
    },
    ".msg-profile.group svg": { width: "60%" },
    ".msg": {
        display: "flex",
        alignItems: "center",
        padding: "20px",
        cursor: "pointer",
        transition: "0.2s",
        position: "relative"
    },
    ".msg:hover": { backgroundColor: "var(--msg-hover-bg)" },
    ".msg.active": {
        background: "var(--active-conversation-bg)",
        borderLeft: "4px solid var(--theme-color)"
    },
    ".msg.online:before": {
        content: '""',
        position: "absolute",
        backgroundColor: "#23be7e",
        width: "9px",
        height: "9px",
        borderRadius: "50%",
        border: "2px solid var(--theme-bg-color)",
        left: "50px",
        bottom: "19px"
    },
    ".msg-username": { marginBottom: "4px", fontWeight: 600, fontSize: "15px" },
    ".msg-detail": { overflow: "hidden" },
    ".msg-content": { fontWeight: 500, fontSize: "13px", display: "flex" },
    ".msg-message": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "var(--msg-message)"
    },
    ".msg-date": {
        fontSize: "14px",
        color: "var(--msg-date)",
        marginLeft: "3px"
    },
    ".msg-date:before": { content: '"тАв"', marginRight: "2px" },
    ".add": {
        position: "sticky",
        bottom: "25px",
        backgroundColor: "var(--theme-color)",
        width: "60px",
        height: "60px",
        border: "0",
        borderRadius: "50%",
        backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3e%3cpath d='M12 5v14M5 12h14'/%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "28px",
        boxShadow: "0 0 16px var(--theme-color)",
        margin: "auto auto -55px",
        flexShrink: 0,
        zIndex: 1,
        cursor: "pointer"
    },
    ".overlay": {
        position: "sticky",
        bottom: "0",
        left: "0",
        width: "340px",
        flexShrink: 0,
        background: "var(--overlay-bg)",
        height: "80px"
    },
    ".chat-area-header": {
        display: "flex",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        background: "var(--chat-header-bg)"
    },
    ".chat-area-profile": {
        width: "32px",
        borderRadius: "50%",
        objectFit: "cover"
    },
    ".chat-area-title": {
        fontSize: "18px",
        fontWeight: 600
    },
    ".chat-area-main": {
        flexGrow: 1
    },
    ".chat-msg-img": {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        objectFit: "cover"
    },
    ".chat-msg-profile": {
        flexShrink: 0,
        marginTop: "auto",
        marginBottom: "-20px",
        position: "relative"
    },
    ".chat-msg-date": {
        position: "absolute",
        left: "calc(100% + 12px)",
        bottom: "0",
        fontSize: "12px",
        fontWeight: 600,
        color: "var(--msg-date)",
        whiteSpace: "nowrap"
    },
    ".chat-msg": { display: "flex", padding: "0 20px 45px" },
    ".chat-msg-content": {
        marginLeft: "12px",
        maxWidth: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    ".chat-msg-text": {
        backgroundColor: "var(--chat-text-bg)",
        padding: "15px",
        borderRadius: "20px 20px 20px 0",
        lineHeight: 1.5,
        fontSize: "14px",
        fontWeight: 500,
        color: "var(--chat-text-color)"
    },
    ".chat-msg-text + .chat-msg-text": { marginTop: "10px" },
    ".owner": { flexDirection: "row-reverse" },
    ".owner .chat-msg-content": {
        marginLeft: "0",
        marginRight: "12px",
        alignItems: "flex-end"
    },
    ".owner .chat-msg-text": {
        backgroundColor: "var(--theme-color)",
        color: "#fff",
        borderRadius: "20px 20px 0 20px"
    },
    ".owner .chat-msg-date": { left: "auto", right: "calc(100% + 12px)" },
    ".chat-msg-text img": { maxWidth: "300px", width: "100%" },
    ".chat-area-footer": {
        display: "flex",
        borderTop: "1px solid var(--border-color)",
        width: "100%",
        padding: "10px 20px",
        alignItems: "center",
        backgroundColor: "var(--theme-bg-color)",
        position: "sticky",
        bottom: "0",
        left: "0"
    },
    ".chat-area-footer svg": {
        color: "var(--settings-icon-color)",
        width: "20px",
        flexShrink: 0,
        cursor: "pointer"
    },
    ".chat-area-footer svg:hover": { color: "var(--settings-icon-hover)" },
    ".chat-area-footer svg + svg": { marginLeft: "12px" },
    ".chat-area-footer input": {
        border: "none",
        color: "var(--body-color)",
        backgroundColor: "var(--input-bg)",
        padding: "12px",
        borderRadius: "6px",
        fontSize: "15px",
        margin: "0 12px",
        width: "100%"
    },
    ".chat-area-footer input::placeholder": { color: "var(--input-chat-color)" },
    ".detail-area-header": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    ".detail-area-header .msg-profile": {
        marginRight: "0",
        width: "60px",
        height: "60px",
        marginBottom: "15px"
    },
    ".detail-title": { fontSize: "18px", fontWeight: 600, marginBottom: "10px" },
    ".detail-subtitle": {
        fontSize: "12px",
        fontWeight: 600,
        color: "var(--msg-date)"
    },
    ".detail-button": {
        border: "0",
        backgroundColor: "var(--button-bg-color)",
        padding: "10px 14px",
        borderRadius: "5px",
        color: "var(--button-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        flexGrow: 1,
        fontWeight: 500
    },
    ".detail-button svg": { width: "18px", marginRight: "10px" },
    ".detail-button:last-child": { marginLeft: "8px" },
    ".detail-buttons": { marginTop: "20px", display: "flex", width: "100%" },
    ".detail-area input": {
        backgroundColor: "transparent",
        border: "none",
        width: "100%",
        color: "var(--body-color)",
        backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23c1c7cd'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "16px",
        backgroundPosition: "100%",
        fontFamily: "var(--body-font)",
        fontWeight: 600,
        fontSize: "14px",
        borderBottom: "1px solid var(--border-color)",
        padding: "14px 0"
    },
    ".detail-area input::placeholder": { color: "var(--detail-font-color)" },
    ".detail-changes": { marginTop: "40px" },
    ".detail-change": {
        color: "var(--detail-font-color)",
        fontFamily: "var(--body-font)",
        fontWeight: 600,
        fontSize: "14px",
        borderBottom: "1px solid var(--border-color)",
        padding: "14px 0",
        display: "flex"
    },
    ".detail-change svg": { width: "16px", marginLeft: "auto" },
    ".colors": { display: "flex", marginLeft: "auto" },
    ".color": {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        cursor: "pointer"
    },
    ".color.selected": {
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='%23fff' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E\")",
        backgroundSize: "10px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    ".color:not(:last-child)": { marginRight: "4px" },
    ".detail-photo-title": {
        display: "flex",
        alignItems: "center",
        color: "var(--detail-font-color)",
        fontWeight: 600,
        fontSize: "14px",
        marginBottom: "20px"
    },
    ".detail-photo-title svg": { width: "16px", marginRight: "8px" },
    ".detail-photos": { marginTop: "30px", textAlign: "center" },
    ".detail-photo-grid": {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridColumnGap: "6px",
        gridRowGap: "6px",
        gridTemplateRows: "repeat(3, 60px)"
    },
    ".detail-photo-grid img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "8px",
        objectPosition: "center"
    },
    ".view-more": {
        color: "var(--theme-color)",
        fontWeight: 600,
        fontSize: "15px",
        margin: "25px 0"
    },
    ".follow-me": {
        textDecoration: "none",
        fontSize: "14px",
        width: "calc(100% + 60px)",
        marginLeft: "-30px",
        display: "flex",
        alignItems: "center",
        marginTop: "auto",
        overflow: "hidden",
        color: "#9c9cab",
        padding: "0 20px",
        height: "52px",
        flexShrink: 0,
        position: "relative",
        justifyContent: "center"
    },
    ".follow-me svg": { width: "16px", height: "16px", marginRight: "8px" },
    ".follow-text": { display: "flex", alignItems: "center", transition: "0.3s" },
    ".follow-me:hover .follow-text": { transform: "translateY(100%)" },
    ".follow-me:hover .developer": { top: "0" },
    ".developer": {
        position: "absolute",
        color: "var(--detail-font-color)",
        fontWeight: 600,
        left: "0",
        top: "-100%",
        display: "flex",
        transition: "0.3s",
        padding: "0 20px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--developer-color)",
        width: "100%",
        height: "100%"
    },
    ".developer img": {
        borderRadius: "50%",
        width: "26px",
        height: "26px",
        objectFit: "cover",
        marginRight: "10px"
    },
    ".dark-mode .search-bar input,\r\n.dark-mode .detail-area input": {
        backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%236f7073'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e\")"
    },
    ".dark-mode .dark-light svg": { fill: "#ffce45", stroke: "#ffce45" },
    ".dark-mode .chat-area-group span": { color: "#d1d1d2" },
    ".chat-area-group": { flexShrink: 0, display: "flex" },
    ".chat-area-group *": { border: "2px solid var(--theme-bg-color)" },
    ".chat-area-group * + *": { marginLeft: "-5px" },
    ".chat-area-group span": {
        width: "32px",
        height: "32px",
        backgroundColor: "var(--button-bg-color)",
        color: "var(--theme-color)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 500
    },
    "@media (max-width: 1120px)": { ".detail-area": { display: "none" } },
    "@media (max-width: 780px)": {
        ".conversation-area": { display: "none" },
        ".search-bar": { marginLeft: "0", flexGrow: 1 },
        ".search-bar input": { paddingRight: "10px" }
    }
});
export {
    convertPlease,
    styles
};