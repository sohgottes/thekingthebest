
  (function initColor() {
    const colors = ["#FFF7E8","#FFE6BA","#FFD18B","#FFB95D","#FF9E2E","#FF7F00","#DB6600","#B85000","#943B00","#702900","#4D1900"];
    const themeIncrements = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  
    colors.forEach((color, index) => {
      const propName = `--ai-create-color-theme-${themeIncrements[index]}`;
      document.documentElement.style.setProperty(propName, color);
    });
  })();
  
  (function initFont() {
    [
      { name: 'Montserrat', key: '--custom-heading-font', fontFamily: 'Montserrat,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
      { name: 'Poppins', key: '--custom-body-font', fontFamily: 'Poppins,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
    ]
      .forEach(({ name, key, fontFamily }) => {
        if (name && name !== "undefined") {
          const font = new FontFace(name, `url("/static/font/${name}.ttf")`);
          document.fonts.add(font);
          font.load();
          document.documentElement.style.setProperty(key, fontFamily);
        }
      });
  })();
  async function render() {
  window.siteRoutes = [{
    "name": "Página Inicial",
    "path": "pagina-inicial",
    "title": "Página Inicial",
    "isHomePage": true
  }, {
    "name": "Sobre Nós",
    "path": "sobre-nos",
    "title": "Sobre Nós",
    "isHomePage": false
  }, {
    "name": "Portfólio",
    "path": "portfolio",
    "title": "Portfólio",
    "isHomePage": false
  }, {
    "name": "Galeria",
    "path": "galeria",
    "title": "Galeria",
    "isHomePage": false
  }];
  window.attachments = [];
  window.turi = {
    "botUrl": null,
    "botStatus": 0
  };
  const routerList = [];
  const createRoot = await siteEngine.getPackage("createRoot");
  const React = await siteEngine.getPackage("React");
  const ErrorBoundary = await siteEngine.getPackage("ErrorBoundary");
  const RouterWrap = await siteEngine.getPackage("RouterWrap");
  const ReactRouterDom = await siteEngine.getPackage('ReactRouterDom');
  const createBrowserRouter = ReactRouterDom.createBrowserRouter;
  const RouterProvider = ReactRouterDom.RouterProvider;
  const Navigate = ReactRouterDom.Navigate;
  const AnimateInView = await siteEngine.getPackage('@Basic/AnimateInView');
  const EditableImg = await siteEngine.getPackage('@Basic/EditableImg');
  const EditableText = await siteEngine.getPackage('@Basic/EditableText');
  const EditableButton = await siteEngine.getPackage('@Basic/EditableButton');
  const EditableIcon = await siteEngine.getPackage('@Basic/EditableIcon');
  const EditableMedia = await siteEngine.getPackage('@Basic/EditableMedia');
  const EditableEmbed = await siteEngine.getPackage('@Basic/EditableEmbed');
  const EmbedPopover = await siteEngine.getPackage('@Basic/EmbedPopover');
  const EmbedSidetab = await siteEngine.getPackage('@Basic/EmbedSidetab');
  const AIChatBox = await siteEngine.getPackage('@Basic/AIChatBox');
  const ComponentSlot = await siteEngine.getPackage('@Basic/ComponentSlot');
  const Overflow = await siteEngine.getPackage('@Basic/Overflow');
  const {
    debounce,
    throttle
  } = await siteEngine.getPackage('lodash-es');
  const Marquee = await siteEngine.getPackage('Marquee'); //跑马灯
  const Carousel = await siteEngine.getPackage('Carousel'); //轮播图
  const motion = await siteEngine.getPackage('motion');
  const framerMotion = await siteEngine.getPackage('framerMotion');
  const AnimatePresence = await siteEngine.getPackage('AnimatePresence');
  let Navigation_1867204374601216001 = /*#__PURE__*/React.createElement(React.Fragment, null);
  let Footer_1867204374601216001 = /*#__PURE__*/React.createElement(React.Fragment, null);
  const defaultRouter = "pagina-inicial";
  function Layout(props) {
    return /*#__PURE__*/React.createElement(RouterWrap, null, Navigation_1867204374601216001, props.children, Footer_1867204374601216001, /*#__PURE__*/React.createElement(EmbedPopover, null), /*#__PURE__*/React.createElement(EmbedSidetab, null), /*#__PURE__*/React.createElement(AIChatBox, null));
  }
  try {
    function Navigation_06({
      logo = 'https://cdn.wegic.ai/assets/onepage/thread/icon/default.png',
      navItems = ['text=Home&link=/home', 'text=About&link=/about', 'text=Service&link=/service', 'text=Case&link=/case', 'text=Blog&link=/blog', 'text=Contact&link=/contact', 'text=Location&link=/location', 'text=Map&link=/map'],
      primaryButton = {
        icon: 'fa-solid fa-arrow-right',
        textAttr: 'Contact us',
        textColor: 'white'
      },
      secondaryButton,
      fixedTop = false,
      logoSize = 40,
      showButton = true,
      maxCount = 7
    }) {
      const NAV_GAP = React.useMemo(() => 64, []);
      const LOGO_MAX_WIDTH = React.useMemo(() => 300, []);
      const MOBILE_WIDTH = React.useMemo(() => 768, []);
      const MIN_PAGE_WIDTH = React.useMemo(() => 300, []);
      const viewportId = React.useMemo(() => {
        var _window;
        return ((_window = window) === null || _window === void 0 || (_window = _window.siteEngine) === null || _window === void 0 ? void 0 : _window.scrollContainerId) || 'preview-viewport';
      }, []);
      const [viewportHeight, setViewportHeight] = React.useState(0);
      const [mobileMode, setMobileMode] = React.useState(false);
      const [hidden, setHidden] = React.useState(false);
      const moreButtonRef = React.useRef(null);
      const [moreListVisible, setMoreListVisible] = React.useState(false);
      const mobileListRef = React.useRef(null);
      const [mobileListVisible, setMobileListVisible] = React.useState(false);
      const [mobileEntryVisible, setMobileEntryVisible] = React.useState(false);
      const lastScrollTopRef = React.useRef(0);
      const buttonVisible = showButton && (secondaryButton || primaryButton);
      const layoutObject = React.useMemo(() => {
        const layout = {
          logoSize: 0,
          navHeight: 0,
          buttonHeight: 0,
          buttonPX: 0,
          fontSize: 0,
          dropDownHeight: 0,
          dropDownPaddingLeft: 0,
          dropDownPaddingRight: 0,
          mobileNavHeight: 56,
          mobileNavItemHeight: 56,
          mobileFontSize: 14,
          mobileIconSize: 20
        };
        if (logoSize < 48) {
          layout.fontSize = 14;
          layout.dropDownHeight = 48;
          layout.dropDownPaddingLeft = 12;
          layout.dropDownPaddingRight = 48;
        } else if (logoSize >= 48 && logoSize < 64) {
          layout.fontSize = 15;
          layout.dropDownHeight = 64;
          layout.dropDownPaddingLeft = 20;
          layout.dropDownPaddingRight = 80;
        } else if (logoSize >= 64) {
          layout.fontSize = 16;
          layout.dropDownHeight = 64;
          layout.dropDownPaddingLeft = 20;
          layout.dropDownPaddingRight = 80;
        }
        if (mobileMode) {
          if (logoSize < 56) {
            layout.logoSize = 32;
            layout.mobileNavHeight = 56;
            layout.mobileFontSize = 14;
            layout.mobileIconSize = 20;
          } else {
            layout.logoSize = 48;
            layout.mobileNavHeight = 72;
            layout.mobileFontSize = 16;
            layout.mobileIconSize = 24;
          }
        } else {
          layout.logoSize = logoSize;
          if (logoSize < 56) {
            layout.navHeight = logoSize + 24;
          } else if (logoSize >= 56 && logoSize < 64) {
            layout.navHeight = logoSize + 40;
          } else {
            layout.navHeight = 120;
          }
        }

        /** button */
        if (logoSize < 48) {
          layout.buttonHeight = 40;
          layout.buttonPX = 20;
        } else if (logoSize >= 48 && logoSize < 56) {
          layout.buttonHeight = 48;
          layout.buttonPX = 20;
        } else {
          layout.buttonHeight = 56;
          layout.buttonPX = 28;
        }
        return layout;
      }, [logoSize, mobileMode]);
      const [isOverWidthLogo, setIsOverWidthLogo] = React.useState(false);
      const logoRectRef = React.useRef(null);
      const contentRef = React.useRef(null);
      const logoRef = React.useRef(null);
      const buttonContainerRef = React.useRef(null);
      const [pageWidth, setPageWidth] = React.useState(0);
      const [minPageWidth, setMinPageWidth] = React.useState(MIN_PAGE_WIDTH);
      const [skeletonMinWidth, setSkeletonMinWidth] = React.useState(MIN_PAGE_WIDTH);
      const [logoWidth, setLogoWidth] = React.useState(0);
      const [buttonContainerWidth, setButtonContainerWidth] = React.useState(0);
      const [minLimit, setMinLimit] = React.useState(false);
      const [leftLimit, setLeftLimit] = React.useState(false);
      const [rightLimit, setRightLimit] = React.useState(false);
      const center = React.useMemo(() => !leftLimit && !rightLimit, [leftLimit, rightLimit]);
      const handlePageWidthUpdate = React.useCallback(() => {
        var _contentRef$current;
        if (mobileMode || !logoWidth) {
          return;
        }
        const contentWidth = ((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.clientWidth) || 0;
        const leftRestWidth = contentWidth / 2 - logoWidth - NAV_GAP;
        const rightRestWidth = contentWidth / 2 - buttonContainerWidth - NAV_GAP;
        const pageItemWidth = Math.max(Math.min(leftRestWidth, rightRestWidth) * 2, minPageWidth);
        const newMinLimit = logoWidth + NAV_GAP + minPageWidth + NAV_GAP + buttonContainerWidth > contentWidth;
        const newSkeletonMinWidth = newMinLimit ? minPageWidth : Math.max(contentWidth - logoWidth - buttonContainerWidth - NAV_GAP * 2, minPageWidth);
        const leftLimit = contentWidth / 2 - logoWidth - NAV_GAP < minPageWidth / 2;
        const rightLimit = contentWidth / 2 - buttonContainerWidth - NAV_GAP < minPageWidth / 2;
        setLeftLimit(leftLimit);
        setRightLimit(rightLimit);
        setMinLimit(newMinLimit);
        setPageWidth(pageItemWidth);
        setSkeletonMinWidth(newSkeletonMinWidth);
      }, [minPageWidth, mobileMode, logoWidth, buttonContainerWidth]);
      React.useEffect(() => {
        handlePageWidthUpdate();
      }, [logoSize, isOverWidthLogo, navItems, showButton, primaryButton, secondaryButton, handlePageWidthUpdate]);
      React.useEffect(() => {
        setMinPageWidth(MIN_PAGE_WIDTH);
      }, [navItems]);

      /** navigation ResizeObserver start */
      const handleViewportWidthChange = React.useCallback(throttle(entries => {
        const entry = entries[0];
        const rect = entry.contentRect;
        setViewportHeight(rect.height);
        if (rect.width > MOBILE_WIDTH) {
          mobileMode && setMobileMode(false);
          handlePageWidthUpdate();
        } else {
          !mobileMode && setMobileMode(true);
        }
      }, 32), [mobileMode, handlePageWidthUpdate]);
      React.useEffect(() => {
        const scrollDom = document.getElementById(viewportId);
        const observer = new ResizeObserver(handleViewportWidthChange);
        observer.observe(scrollDom);
        return () => {
          observer.disconnect();
        };
      }, [viewportId, handleViewportWidthChange]);
      /** navigation ResizeObserver end */

      /** logo ResizeObserver start */
      const handleLogoWidthChange = React.useCallback(throttle(entries => {
        const entry = entries[0];
        const rect = entry.contentRect;
        rect.width && setLogoWidth(rect.width);
      }, 32), []);
      React.useEffect(() => {
        if (!logoRef.current || mobileMode) {
          return;
        }
        const observer = new ResizeObserver(handleLogoWidthChange);
        observer.observe(logoRef.current);
        return () => {
          observer.disconnect();
        };
      }, [mobileMode, handleLogoWidthChange]);
      /** logo ResizeObserver end */

      /** button ResizeObserver start */
      const handleButtonWidthChange = React.useCallback(throttle(entries => {
        const entry = entries[0];
        const rect = entry.contentRect;
        rect.width && setButtonContainerWidth(rect.width);
      }, 32), []);
      React.useEffect(() => {
        if (!buttonContainerRef.current || mobileMode || minLimit || !buttonVisible) {
          return;
        }
        const observer = new ResizeObserver(handleButtonWidthChange);
        observer.observe(buttonContainerRef.current);
        return () => {
          observer.disconnect();
        };
      }, [mobileMode, handleButtonWidthChange, minLimit, buttonVisible]);
      /** button ResizeObserver end */

      React.useEffect(() => {
        if (!mobileMode) {
          setMobileListVisible(false);
        } else {
          setMoreListVisible(false);
        }
      }, [mobileMode]);
      const handleCloseMoreList = e => {
        var _moreButtonRef$curren;
        if ((_moreButtonRef$curren = moreButtonRef.current) !== null && _moreButtonRef$curren !== void 0 && _moreButtonRef$curren.contains(e.target)) {
          return;
        }
        if (moreListVisible) {
          setMoreListVisible(false);
        }
      };
      React.useEffect(() => {
        moreListVisible && window.addEventListener('click', handleCloseMoreList);
        return () => {
          window.removeEventListener('click', handleCloseMoreList);
        };
      }, [moreListVisible]);
      React.useEffect(() => {
        var _window2;
        const handleScroll = throttle(e => {
          if (fixedTop || !e.target) {
            return;
          }
          if (mobileListVisible) {
            setMobileListVisible(false);
          }
          const viewportHeight = window.innerHeight;
          const scrollTop = e.target.scrollTop;
          if (lastScrollTopRef.current < scrollTop) {
            if (scrollTop >= viewportHeight / 2) {
              !hidden && setHidden(true);
            } else {
              hidden && setHidden(false);
            }
          } else {
            hidden && setHidden(false);
          }
          lastScrollTopRef.current = scrollTop;
        }, 32);
        let scrollContainer = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.document.getElementById(viewportId);
        scrollContainer === null || scrollContainer === void 0 || scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
          scrollContainer === null || scrollContainer === void 0 || scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }, [hidden, fixedTop, mobileListVisible]);
      React.useEffect(() => {
        let count = navItems.length;
        if (showButton) {
          if (primaryButton) count++;
          if (secondaryButton) count++;
        }
        setMobileEntryVisible(count > 1);
        count <= 1 && setMobileListVisible(false);
      }, [primaryButton, secondaryButton, navItems, showButton]);

      /** update logo mode start */
      const handleImageAspectRatioUpdate = () => {
        if (!logoRectRef.current) {
          return;
        }
        const currentAspectRatio = LOGO_MAX_WIDTH / layoutObject.logoSize;
        const {
          naturalWidth,
          naturalHeight
        } = logoRectRef.current;
        const aspectRatio = naturalWidth / naturalHeight;
        setIsOverWidthLogo(aspectRatio > currentAspectRatio);
      };
      React.useEffect(() => {
        var _logoRectRef$current;
        if (((_logoRectRef$current = logoRectRef.current) === null || _logoRectRef$current === void 0 ? void 0 : _logoRectRef$current.logo) === logo) {
          handleImageAspectRatioUpdate();
          return;
        }
        const image = new Image();
        image.onload = () => {
          logoRectRef.current = {
            logo,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight
          };
          handleImageAspectRatioUpdate();
        };
        image.src = logo;
      }, [logo, layoutObject]);
      /** update logo mode end */

      const renderNavItem = (item, index) => {
        return /*#__PURE__*/React.createElement(EditableButton, {
          key: item,
          style: {
            fontSize: layoutObject.fontSize
          },
          className: `${index ? 'ml-8' : ''} py-3 text-white whitespace-nowrap cursor-pointer duration-50 dark:text-white dark:hover:text-white/60  relative after:content-[''] after:absolute after:bottom-[11px] after:right-0 hover:after:left-0 after:h-[1px] after:bg-white after:max-w-96 after:w-0 hover:after:w-full after:transition-all after:duration-300`
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `navItems_${index}`
        }, item));
      };
      const renderMoreListItems = (items, startIndex = 0) => {
        return items.map((item, index) => /*#__PURE__*/React.createElement(EditableButton, {
          key: item,
          style: {
            height: layoutObject.dropDownHeight,
            paddingLeft: layoutObject.dropDownPaddingLeft,
            paddingRight: layoutObject.dropDownPaddingRight,
            fontSize: layoutObject.fontSize
          },
          className: "flex-shrink-0 w-full h-full text-white whitespace-nowrap cursor-pointer text-left dark:text-white dark:hover:text-white/60 rounded-md hover:bg-[#ffffff0f] transition-colors",
          onClick: () => setMoreListVisible(false)
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `navItems_${startIndex + index}`
        }, item)));
      };
      const renderRest = omittedItems => /*#__PURE__*/React.createElement("div", {
        className: "relative ml-8 "
      }, /*#__PURE__*/React.createElement(motion.button, {
        ref: moreButtonRef,
        className: "w-10 h-10 flex items-center justify-center flex-shrink-0",
        onClick: () => setMoreListVisible(!moreListVisible),
        whileTap: {
          scale: 0.9
        },
        style: {
          fontSize: layoutObject.fontSize
        }
      }, /*#__PURE__*/React.createElement("svg", {
        style: {
          transform: 'translateY(2px)'
        },
        className: "hover:transition-all hover:scale-110 text-white dark:text-black",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "3",
        cy: "10",
        r: "1.5",
        fill: "currentColor"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "10",
        r: "1.5",
        fill: "currentColor"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "17",
        cy: "10",
        r: "1.5",
        fill: "currentColor"
      }))), moreListVisible && /*#__PURE__*/React.createElement(AnimatePresence, null, /*#__PURE__*/React.createElement(motion.div, {
        style: {
          boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
          fontSize: layoutObject.fontSize
        },
        className: `max-h-96 overflow-auto overscroll-contain absolute z-40 top-full right-0 flex flex-col p-1 rounded-md bg-[#000000C4]  border border-[#0000000a]`,
        animate: {
          scale: [0, 1],
          opacity: [0, 1]
        }
      }, renderMoreListItems(omittedItems, navItems.length - omittedItems.length))));
      const handleOverflowUpdate = (widths, overflow) => {
        if (mobileMode) {
          return;
        }
        if (widths.length >= 2) {
          const firstItemWidth = widths[0];
          const restItemWidth = overflow ? widths[widths.length - 1] : 72;
          setMinPageWidth(firstItemWidth + restItemWidth);
        } else if (navItems.length === 1 && widths.length && widths[0]) {
          setMinPageWidth(widths[0]);
        } else setMinPageWidth(MIN_PAGE_WIDTH);
      };
      const renderNavList = items => {
        return /*#__PURE__*/React.createElement("div", {
          className: `${buttonVisible ? 'absolute' : 'flex flex-1 flex-shrink'} ${center ? buttonVisible ? 'left-1/2 -translate-x-1/2' : '' : leftLimit || minLimit ? `left-[${logoWidth + NAV_GAP}px]` : `right-[${buttonContainerWidth + NAV_GAP}px]`} ${moreListVisible ? '' : 'overflow-hidden'}`,
          style: {
            width: buttonVisible ? pageWidth : undefined,
            minWidth: buttonVisible ? minPageWidth : undefined
          }
        }, /*#__PURE__*/React.createElement(Overflow, {
          data: items,
          style: {
            height: layoutObject.logoSize
          },
          className: `flex items-center ${buttonVisible ? 'justify-center' : 'justify-end'} flex-shrink flex-1`,
          renderItem: renderNavItem,
          maxCount: maxCount,
          minCount: 1,
          renderRest: renderRest,
          onUpdate: handleOverflowUpdate
        }));
      };
      const handleMobileButtonClick = e => {
        mobileListVisible && setMobileListVisible(false);
      };
      const renderContent = () => {
        if (mobileMode) {
          return /*#__PURE__*/React.createElement("div", {
            className: "flex flex-col h-full w-full"
          }, /*#__PURE__*/React.createElement("div", {
            className: "relative flex flex-shrink-0 z-40 w-full pl-4  justify-between  items-center  overflow-hidden md:hidden",
            style: {
              height: layoutObject.mobileNavHeight,
              fontSize: layoutObject.mobileFontSize
            }
          }, /*#__PURE__*/React.createElement(EditableImg, {
            propKey: "logo",
            style: {
              height: isOverWidthLogo ? undefined : layoutObject.logoSize
            },
            className: `${isOverWidthLogo ? `!w-[${LOGO_MAX_WIDTH}px]` : `!w-auto`} !max-w-[${LOGO_MAX_WIDTH}px] object-cover flex-shrink min-w-0`,
            src: logo,
            alt: "logo"
          }), /*#__PURE__*/React.createElement(motion.button, {
            className: `${!mobileEntryVisible ? 'hidden' : ''}  flex justify-center items-center text-white flex-shrink-0`,
            onClick: () => setMobileListVisible(!mobileListVisible),
            whileTap: {
              scale: 0.9
            },
            style: {
              width: layoutObject.mobileNavHeight,
              height: layoutObject.mobileNavHeight,
              fontSize: layoutObject.mobileFontSize
            }
          }, mobileListVisible ? /*#__PURE__*/React.createElement("svg", {
            width: layoutObject.mobileIconSize,
            height: layoutObject.mobileIconSize,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M4 16L16 4.25115",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/React.createElement("path", {
            d: "M4 4L16 15.7489",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })) : /*#__PURE__*/React.createElement("svg", {
            width: layoutObject.mobileIconSize,
            height: layoutObject.mobileIconSize,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M3 5L16.375 5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/React.createElement("path", {
            d: "M3 10H16.375",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/React.createElement("path", {
            d: "M3 15H16.375",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })))), mobileListVisible && /*#__PURE__*/React.createElement("div", {
            ref: mobileListRef,
            className: "relative z-50 flex flex-grow flex-shrink flex-col rounded-b-3xl shadow-xl overflow-hidden md:hidden",
            style: {
              fontSize: layoutObject.mobileFontSize
            }
          }, /*#__PURE__*/React.createElement(motion.nav, {
            className: `w-full h-full flex flex-col rounded-b-3xl`,
            animate: {
              y: [20, 0],
              opacity: [0, 1]
            },
            transition: {
              duration: 0.4
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex flex-col flex-grow flex-shrink overflow-auto overscroll-contain"
          }, navItems.map((item, navIndex) => /*#__PURE__*/React.createElement(EditableButton, {
            style: {
              height: layoutObject.mobileNavItemHeight,
              maxHeight: layoutObject.mobileNavItemHeight,
              fontSize: layoutObject.mobileFontSize
            },
            key: item,
            onClick: handleMobileButtonClick,
            className: "w-full flex-grow-0 flex-shrink-0 text-white whitespace-nowrap cursor-pointer duration-50 dark:text-black dark:hover:text-black/60 select-none hover:bg-white/10 transition-colors"
          }, /*#__PURE__*/React.createElement(EditableText, {
            propKey: `navItems_${navIndex}`
          }, item)))), /*#__PURE__*/React.createElement("div", {
            className: `${showButton ? '' : 'hidden'} w-full h-fit flex-shrink-0 flex items-center justify-between overflow-hidden gap-5 px-5 py-[10px]`
          }, secondaryButton && /*#__PURE__*/React.createElement(EditableButton, {
            onClick: handleMobileButtonClick,
            style: {
              height: layoutObject.mobileNavItemHeight,
              fontSize: layoutObject.mobileFontSize
            },
            className: `BTN-SECONDARY overflow-hidden px-10 flex-1 group/nav whitespace-nowrap font-normal text-white flex justify-center gap-2 items-center rounded-full hover:bg-white/10 hover:transition-all hover:duration-300`
          }, /*#__PURE__*/React.createElement(EditableText, {
            className: "overflow-hidden text-ellipsis",
            propKey: "secondaryButton_textAttr"
          }, secondaryButton.textAttr), /*#__PURE__*/React.createElement(EditableIcon, {
            propKey: "secondaryButton_icon",
            icon: secondaryButton.icon,
            iconLibrary: "FontAwesome",
            className: " text-white group-hover/nav:translate-x-1 transition-all"
          })), primaryButton && /*#__PURE__*/React.createElement(EditableButton, {
            onClick: handleMobileButtonClick,
            style: {
              height: layoutObject.mobileNavItemHeight,
              color: 'white',
              fontSize: layoutObject.mobileFontSize
            },
            className: `BTN-PRIMARY overflow-hidden px-10 flex-1 group/nav whitespace-nowrap font-normal flex justify-center gap-2 items-center rounded-full border border-white bg-white/0 hover:bg-white/10 hover:transition-all hover:duration-300`
          }, /*#__PURE__*/React.createElement(EditableText, {
            className: "overflow-hidden text-ellipsis",
            propKey: "primaryButton_textAttr"
          }, primaryButton.textAttr), /*#__PURE__*/React.createElement(EditableIcon, {
            propKey: "primaryButton_icon",
            icon: primaryButton.icon,
            iconLibrary: "FontAwesome",
            style: {
              color: 'white'
            },
            className: " group-hover/nav:translate-x-1 transition-all"
          }))))));
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: layoutObject.navHeight
          },
          className: "relative w-full hidden gap-16 md:flex justify-between items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: `w-fit h-full flex flex-shrink-0 items-center justify-start`,
          ref: logoRef,
          style: {
            maxWidth: LOGO_MAX_WIDTH
          }
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "logo",
          style: {
            height: isOverWidthLogo ? undefined : layoutObject.logoSize
          },
          className: `${isOverWidthLogo ? `!w-[${LOGO_MAX_WIDTH}px]` : `!w-auto`} !max-w-[${LOGO_MAX_WIDTH}px] object-cover flex-shrink-0 min-w-0`,
          src: logo,
          alt: "logo"
        })), renderNavList(navItems), buttonVisible && /*#__PURE__*/React.createElement("div", {
          className: "flex flex-shrink flex-1",
          style: {
            minWidth: leftLimit || rightLimit ? skeletonMinWidth : undefined
          }
        }), buttonVisible && /*#__PURE__*/React.createElement("div", {
          className: `w-fit h-full flex items-center justify-end overflow-hidden gap-3 ${minLimit ? 'flex-shrink' : 'flex-shrink-0'}`,
          ref: buttonContainerRef
        }, secondaryButton && /*#__PURE__*/React.createElement(EditableButton, {
          style: {
            height: layoutObject.buttonHeight,
            fontSize: layoutObject.fontSize
          },
          className: `BTN-SECONDARY max-w-[180px] w-fit px-5 group/nav whitespace-nowrap font-normal text-white flex gap-2 items-center rounded-full hover:bg-white/5 hover:transition-all hover:duration-300`
        }, /*#__PURE__*/React.createElement(EditableText, {
          className: "overflow-hidden text-ellipsis",
          propKey: "secondaryButton_textAttr"
        }, secondaryButton.textAttr), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "secondaryButton_icon",
          icon: secondaryButton.icon,
          iconLibrary: "FontAwesome",
          className: "text-sm text-white group-hover/nav:translate-x-1 transition-all"
        })), primaryButton && /*#__PURE__*/React.createElement(EditableButton, {
          style: {
            height: layoutObject.buttonHeight,
            color: 'white',
            padding: `0 ${layoutObject.buttonPX}px`,
            fontSize: layoutObject.fontSize
          },
          className: `BTN-PRIMARY max-w-[180px] w-fit  group/nav whitespace-nowrap font-normal flex gap-2 items-center rounded-full border border-white bg-white/0 hover:bg-white/10 hover:transition-all hover:duration-300`
        }, /*#__PURE__*/React.createElement(EditableText, {
          className: "overflow-hidden text-ellipsis",
          propKey: "primaryButton_textAttr"
        }, primaryButton.textAttr), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "primaryButton_icon",
          icon: primaryButton.icon,
          iconLibrary: "FontAwesome",
          style: {
            color: 'white'
          },
          className: "text-sm group-hover/nav:translate-x-1 transition-all"
        }))));
      };
      return /*#__PURE__*/React.createElement("section", {
        style: {
          transitionTimingFunction: 'cubic-bezier(.165,.84,.44,1)',
          transitionDuration: '300ms',
          fontSize: layoutObject.fontSize,
          height: mobileMode && mobileListVisible ? viewportHeight - 48 : 'auto'
        },
        className: `fixed z-40 left-6 right-6 rounded-3xl outline-white/10 md:rounded-xl bg-black md:bg-[#000000C4] backdrop-blur-sm md:px-8 md:transition-all max-w-[1376px] m-auto ${fixedTop || !hidden ? 'top-6' : 'top-[-130px]'}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-7xl mx-auto w-full h-full",
        ref: contentRef
      }, renderContent()));
    }
    Navigation_1867204374601216001 = /*#__PURE__*/React.createElement(ErrorBoundary, {
      key: "X9uLv5iISoz1QpkIjjxUN"
    }, /*#__PURE__*/React.createElement(Navigation_06, {
      "fixedTop": false,
      "logo": "https://cdn.wegic.ai/assets/onepage/thread/icon/a1e63948-806b-4051-91d0-3ba6a229a545.png",
      "logoSize": 52,
      "siteTitle": "KingLion Móveis Planejados",
      "navItems": ["link=pagina-inicial&text=P%C3%A1gina%20Inicial", "link=sobre-nos&text=Sobre%20N%C3%B3s", "link=portfolio&text=Portf%C3%B3lio", "link=galeria&text=Galeria"],
      "showButton": false,
      "primaryButton": {
        "icon": "fa-solid fa-arrow-right",
        "textAttr": "link=https%3A%2F%2Fwa.me%2F551233410628&target=_blank&text=WhatsApp",
        "textColor": "#000000"
      },
      "version": 3,
      key: "X9uLv5iISoz1QpkIjjxUN"
    }));
  } catch (error) {}
  {
    const list = [];
    try {
      function Hero_19({
        backgroundImageUrl = "https://cdn.wegic.ai/assets/onepage/img/f5aa5b65-6cb0-4cc2-8914-3098b3b17788.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A2700%3A1296%2Fsm%3A1",
        title = "Bem-vindo ao Luxo em Marcenaria",
        description = "Descubra a excelência em móveis de alto padrão com a KingLion em São José dos Campos - SP, onde a elegância encontra a funcionalidade em cada peça única."
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex items-center justify-center"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          isFCP: true,
          propKey: "backgroundImageUrl",
          className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-30",
          src: backgroundImageUrl,
          alt: "KingLion M\xF3veis de Alto Padr\xE3o"
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute inset-0 bg-black opacity-50 z-0"
        }), /*#__PURE__*/React.createElement("div", {
          className: "relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 text-center"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 animate-fade-in-up"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description)), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-600"
        })), /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"
        }));
      }
      /*#__PURE__*/
      React.createElement("style", null, `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animation-delay-300 {
      animation-delay: 0.3s;
    }
    .animation-delay-600 {
      animation-delay: 0.6s;
    }
  `);
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "RjOs70rVCxWM_mrKImvlT"
      }, /*#__PURE__*/React.createElement(Hero_19, {
        "backgroundImageUrl": "https://cdn.wegic.ai/assets/onepage/img/f5aa5b65-6cb0-4cc2-8914-3098b3b17788.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A2700%3A1296%2Fsm%3A1",
        "title": "Bem-vindo ao Luxo em Marcenaria",
        "description": "Descubra a excelência em móveis de alto padrão com a KingLion em São José dos Campos - SP, onde a elegância encontra a funcionalidade em cada peça única.",
        key: "RjOs70rVCxWM_mrKImvlT"
      })));
    } catch (error) {}
    try {
      function Feature_19({
        features = [{
          name: 'Seamless Deployment',
          description: 'Effortlessly deploy your projects with our cutting-edge technology, ensuring rapid and reliable launches every time.',
          icon: 'fa-solid fa-cloud-arrow-up'
        }, {
          name: 'Robust Security',
          description: 'Our platform ensures your data remains secure with SSL certificates and advanced encryption, keeping your information safe.',
          icon: 'fa-solid fa-lock'
        }, {
          name: 'Efficient Workflows',
          description: 'Optimize your workflows with simple queues and automation, boosting productivity and efficiency across your projects.',
          icon: 'fa-solid fa-cloud'
        }, {
          name: 'Comprehensive API',
          description: 'Unlock limitless possibilities with our powerful API, allowing for extensive customization and control over your applications.',
          icon: 'fa-solid fa-cog'
        }, {
          name: 'Continuous Backups',
          description: 'Never worry about data loss again with our continuous backup solutions, ensuring your work is always safe and recoverable.',
          icon: 'fa-solid fa-server'
        }, {
          name: 'Streamlined Collaboration',
          description: 'Enhance teamwork with tools designed for seamless collaboration, making it easier to share, communicate, and collaborate on projects.',
          icon: 'fa-solid fa-users'
        }],
        sectionTitle = "Everything You Need",
        sectionHeading = "No Server? No Problem.",
        sectionDescription = "Our platform provides all the tools and services you need to deploy, secure, and manage your applications effortlessly, without the need for a server."
      } = {}) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white dark:bg-slate-800 py-16 sm:py-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-base font-semibold leading-7 text-sky-500 dark:text-sky-400"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionTitle`
        }, sectionTitle)), /*#__PURE__*/React.createElement("p", {
          className: "TITLE-SECONDARY mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionHeading`
        }, sectionHeading)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionDescription`
        }, sectionDescription))), /*#__PURE__*/React.createElement("dl", {
          className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16"
        }, features.map((feature, index) => /*#__PURE__*/React.createElement("div", {
          key: `${feature.name}_${index}`,
          className: "relative pl-9"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center font-semibold text-slate-900 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `features_${index}_icon`,
          icon: feature.icon,
          iconLibrary: "FontAwesome",
          className: "absolute left-1 top-0 text-lg text-sky-500 dark:text-sky-400"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_name`
        }, feature.name)), /*#__PURE__*/React.createElement("dd", {
          className: "inline TEXT-CONTENT"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_description`
        }, feature.description)))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "-mlX1zrsw0JRLu64J41om"
      }, /*#__PURE__*/React.createElement(Feature_19, {
        "features": [{
          "name": "Design Personalizado",
          "description": "Cada projeto é único, refletindo o estilo e as necessidades de nossos clientes.",
          "icon": "fa-solid fa-paint-brush"
        }, {
          "name": "Materiais Premium",
          "description": "Utilizamos apenas materiais da mais alta qualidade para garantir durabilidade e beleza.",
          "icon": "fa-solid fa-gem"
        }, {
          "name": "Sustentabilidade",
          "description": "Comprometidos com práticas sustentáveis, respeitamos o meio ambiente em cada etapa.",
          "icon": "fa-solid fa-leaf"
        }, {
          "name": "Inovação Contínua",
          "description": "Sempre à frente com soluções inovadoras para atender às demandas modernas.",
          "icon": "fa-solid fa-lightbulb"
        }, {
          "name": "Execução Precisa",
          "description": "Cuidadosa atenção aos detalhes para garantir a perfeição em cada peça.",
          "icon": "fa-solid fa-ruler-combined"
        }, {
          "name": "Atendimento Exclusivo",
          "description": "Nosso time está sempre disponível para oferecer suporte personalizado.",
          "icon": "fa-solid fa-headset"
        }],
        "sectionTitle": "Características Distintivas",
        "sectionHeading": "Detalhes que Fazem a Diferença",
        "sectionDescription": "Na KingLion, cada detalhe é meticulosamente planejado para oferecer móveis que transcendem o comum.",
        key: "-mlX1zrsw0JRLu64J41om"
      })));
    } catch (error) {}
    try {
      function CallToAction_05({
        title = "Entre em Contato Conosco",
        description = "link=&target=_blank&text=Agende uma consulta para descobrir o que podemos criar juntos.",
        bulletPoints = [{
          "icon": "fa-solid fa-check",
          "point": "Descubra marcenaria de alto padrão com design elegante"
        }, {
          "icon": "fa-solid fa-check",
          "point": "Serviço personalizado para suas necessidades"
        }, {
          "icon": "fa-solid fa-check",
          "point": "Materiais de alta qualidade garantidos"
        }],
        mainImageUrl = "https://cdn.wegic.ai/assets/onepage/img/57740d8f-7423-482f-b2d7-0a47af972bc7.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A1350%3A1004%2Fsm%3A1",
        primaryButtonText = "link=https://wa.me/551233410628&target=_blank&text=Contate-nos",
        primaryButtonIcon = "fa-solid fa-pen-to-square",
        secondaryButtonText = "link=&target=_blank&text=Saiba Mais",
        secondaryButtonIcon = "fa-solid fa-comments"
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-slate-50 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: " max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-12 justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-12"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-6"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-5xl font-extrabold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-lg font-normal text-slate-600 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))), /*#__PURE__*/React.createElement("ul", {
          className: "space-y-4"
        }, bulletPoints.map((point, index) => /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "TEXT-CONTENT flex items-center text-lg font-normal text-slate-900 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `bulletPoints_${index}_icon`,
          icon: point.icon,
          iconLibrary: "FontAwesome",
          className: "mr-3 text-sky-500 text-lg"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: `bulletPoints_${index}_point`
        }, point.point))))), /*#__PURE__*/React.createElement("div", {
          className: "flex flex-row items-center space-x-5"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "primaryButtonIcon",
          icon: primaryButtonIcon,
          iconLibrary: "FontAwesome",
          className: "mr-2 text-lg text-white"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: "primaryButtonText"
        }, primaryButtonText)), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY inline-flex items-center justify-center text-slate-900 bg-white font-medium border border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "secondaryButtonIcon",
          icon: secondaryButtonIcon,
          iconLibrary: "FontAwesome",
          className: "mr-2 text-lg text-slate-900 dark:text-white"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: "secondaryButtonText"
        }, secondaryButtonText)))), /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "mainImageUrl",
          className: "IMAGE w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-lg bg-slate-100",
          src: mainImageUrl,
          alt: mainImageUrl
        }))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "mIoXzp21AyrrEDdJ3tOeq"
      }, /*#__PURE__*/React.createElement(CallToAction_05, {
        "title": "Entre em Contato Conosco",
        "description": "link=&target=_blank&text=Agende uma consulta para descobrir o que podemos criar juntos.",
        "bulletPoints": [{
          "icon": "fa-solid fa-check",
          "point": "Descubra marcenaria de alto padrão com design elegante"
        }, {
          "icon": "fa-solid fa-check",
          "point": "Serviço personalizado para suas necessidades"
        }, {
          "icon": "fa-solid fa-check",
          "point": "Materiais de alta qualidade garantidos"
        }],
        "mainImageUrl": "https://cdn.wegic.ai/assets/onepage/img/c8c14243-7011-4ad2-840f-6b243cd909a6.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A1152%3A1152%2Fsm%3A1",
        "primaryButtonText": "link=https://wa.me/551233410628&target=_blank&text=Contate-nos",
        "primaryButtonIcon": "fa-solid fa-pen-to-square",
        "secondaryButtonText": "link=https%3A%2F%2Fwa.me%2F551233410628&target=_blank&text=Saiba%20Mais",
        "secondaryButtonIcon": "fa-solid fa-comments",
        key: "mIoXzp21AyrrEDdJ3tOeq"
      })));
    } catch (error) {}
    routerList.push({
      path: "pagina-inicial",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  {
    const list = [];
    try {
      function Header_04({
        title = "Welcome to Our Design Studio",
        description = "Discover creativity and innovation with every project we undertake. Let's build something amazing together.",
        cards = [{
          name: "Innovative Designs",
          description: "Creating visually stunning designs that stand out.",
          icon: "fa-solid fa-lightbulb"
        }, {
          name: "Expert Development",
          description: "Developing robust, scalable, and efficient solutions.",
          icon: "fa-solid fa-code"
        }, {
          name: "Strategic Marketing",
          description: "Crafting marketing strategies that deliver results.",
          icon: "fa-solid fa-bullhorn"
        }],
        backgroundImageUrl = "https://source.unsplash.com/random/1200x800/?creative"
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          isFCP: true,
          propKey: `backgroundImageUrl`,
          className: "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20",
          src: backgroundImageUrl,
          alt: backgroundImageUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "text-4xl font-bold tracking-tight text-white sm:text-6xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `title`
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "mt-6 text-lg leading-8 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description`
        }, description))), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        }, cards.map((card, index) => /*#__PURE__*/React.createElement("div", {
          key: card.name,
          className: "flex gap-x-4 rounded-xl bg-white/5 backdrop-blur-xl p-6 ring-1 ring-inset ring-white/10"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `cards_${index}_icon`,
          icon: card.icon,
          iconLibrary: "FontAwesome",
          className: "text-lg text-indigo-400"
        }), /*#__PURE__*/React.createElement("div", {
          className: "text-base leading-7"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "font-semibold text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `cards_${index}_name`
        }, card.name)), /*#__PURE__*/React.createElement("p", {
          className: "mt-2 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `cards_${index}_description`
        }, card.description))))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "csFk46I4UuFEXgRppJtkx"
      }, /*#__PURE__*/React.createElement(Header_04, {
        "title": "Bem-vindo ao KingLion Móveis de Alto Padrão",
        "description": "Descubra a excelência em design e marcenaria que transforma ambientes com sofisticação e qualidade.",
        "cards": [{
          "name": "Design Elegante",
          "description": "Criações que combinam estética e funcionalidade com precisão.",
          "icon": "fa-solid fa-palette"
        }, {
          "name": "Execução Perfeita",
          "description": "Compromisso com a perfeição em cada detalhe do projeto.",
          "icon": "fa-solid fa-hammer"
        }, {
          "name": "Satisfação Garantida",
          "description": "Clientes satisfeitos que confiam na nossa expertise.",
          "icon": "fa-solid fa-smile"
        }],
        "backgroundImageUrl": "https://cdn.wegic.ai/assets/onepage/img/bc7d2f58-eee9-4aea-9080-7af897f747ad.jpg?args=q%3A85%2Frs%3Afit%3A1792%3A2008%2Fdpr%3A2%2Fsm%3A1",
        key: "csFk46I4UuFEXgRppJtkx"
      })));
    } catch (error) {}
    try {
      function Content_03({
        sectionTitle = "Nossa História",
        sectionSubtitle = "Compromisso com a Excelência",
        content = ["link=&target=_blank&text=%3Cspan%20style%3D%22color%3A%20rgb%2871%2C%2071%2C%2071%29%3B%20font-family%3A%20Arial%2C%20sans-serif%3B%20font-size%3A%2014px%3B%22%3ECom%2013%20anos%20de%20experi%C3%AAncia%20no%20mercado%2C%20nossa%20marcenaria%20%C3%A9%20especializada%20na%20cria%C3%A7%C3%A3o%20de%20m%C3%B3veis%20de%20alto%20padr%C3%A3o%20para%20ambientes%20corporativos%20e%20residenciais.%20Unindo%20tradi%C3%A7%C3%A3o%20e%20inova%C3%A7%C3%A3o%2C%20transformamos%20cada%20projeto%20em%20uma%20obra%20%C3%BAnica%2C%20feita%20sob%20medida%20para%20atender%20%C3%A0s%20necessidades%20e%20estilo%20de%20cada%20cliente.%20Trabalhamos%20com%20materiais%20selecionados%20e%20acabamento%20impec%C3%A1vel%2C%20priorizando%20a%20funcionalidade%2C%20durabilidade%20e%20est%C3%A9tica%20refinada%20que%20caracterizam%20nossos%20m%C3%B3veis.%20Nosso%20compromisso%20%C3%A9%20oferecer%20solu%C3%A7%C3%B5es%20personalizadas%20que%20elevam%20o%20design%20e%20agregam%20valor%20aos%20espa%C3%A7os%2C%20sempre%20com%20excel%C3%AAncia%20em%20cada%20detalhe.%3C%2Fspan%3E"],
        imageUrl = "https://cdn.wegic.ai/assets/onepage/img/1eae150c-6c7e-4946-a756-2e7d228cbf08.png?args=q:85/dpr:2/rs:fit:2368:1776/sm:1"
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full bg-white py-16 sm:py-20 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-base font-semibold leading-7 text-sky-600 dark:text-slate-200"
        }, " ", /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionSubtitle`
        }, sectionSubtitle), " "), /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY mt-2 text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 sm:text-4xl"
        }, " ", /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionTitle`
        }, sectionTitle), " "), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-700 dark:text-slate-300 lg:max-w-none lg:grid-cols-2"
        }, content.map((text, index) => /*#__PURE__*/React.createElement("div", {
          key: index
        }, /*#__PURE__*/React.createElement("p", {
          className: "TEXT-CONTENT"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `content_${index}`
        }, text))))), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 flex"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "relative overflow-hidden pt-16 lg:pt-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `imageUrl`,
          className: "IMAGE mb-[-2%] rounded-xl shadow-2xl ring-1 ring-black/10 w-full h-auto aspect-[4/3] object-cover object-center",
          src: imageUrl,
          alt: imageUrl
        }))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "CY94JhvQJiJEXOq1tob1j"
      }, /*#__PURE__*/React.createElement(Content_03, {
        "sectionTitle": "Nossa História",
        "sectionSubtitle": "Compromisso com a Excelência",
        "content": ["link=&target=_blank&text=%3Cspan%20style%3D%22color%3A%20rgb%2871%2C%2071%2C%2071%29%3B%20font-family%3A%20Arial%2C%20sans-serif%3B%20font-size%3A%2014px%3B%22%3ECom%2013%20anos%20de%20experi%C3%AAncia%20no%20mercado%2C%20nossa%20marcenaria%20%C3%A9%20especializada%20na%20cria%C3%A7%C3%A3o%20de%20m%C3%B3veis%20de%20alto%20padr%C3%A3o%20para%20ambientes%20corporativos%20e%20residenciais.%20Unindo%20tradi%C3%A7%C3%A3o%20e%20inova%C3%A7%C3%A3o%2C%20transformamos%20cada%20projeto%20em%20uma%20obra%20%C3%BAnica%2C%20feita%20sob%20medida%20para%20atender%20%C3%A0s%20necessidades%20e%20estilo%20de%20cada%20cliente.%20Trabalhamos%20com%20materiais%20selecionados%20e%20acabamento%20impec%C3%A1vel%2C%20priorizando%20a%20funcionalidade%2C%20durabilidade%20e%20est%C3%A9tica%20refinada%20que%20caracterizam%20nossos%20m%C3%B3veis.%20Nosso%20compromisso%20%C3%A9%20oferecer%20solu%C3%A7%C3%B5es%20personalizadas%20que%20elevam%20o%20design%20e%20agregam%20valor%20aos%20espa%C3%A7os%2C%20sempre%20com%20excel%C3%AAncia%20em%20cada%20detalhe.%3C%2Fspan%3E"],
        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/1eae150c-6c7e-4946-a756-2e7d228cbf08.png?args=q:85/dpr:2/rs:fit:2368:1776/sm:1",
        key: "CY94JhvQJiJEXOq1tob1j"
      })));
    } catch (error) {}
    try {
      function Video_02({
        title = "Explore a Nossa Visão",
        description = "Assista aos nossos vídeos institucionais e descubra o que nos motiva a criar móveis de alto padrão.",
        videoUrl = "https://www.youtube.com/embed/cZjCHhIsAVo"
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "w-full bg-white dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-20 px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full flex flex-col gap-6 md:w-1/2"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-4xl text-center font-semibold text-slate-900 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base text-center font-normal text-slate-700 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))), /*#__PURE__*/React.createElement("div", {
          className: "mt-12 w-full lg:w-2/3"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "overflow-hidden rounded-lg shadow dark:bg-slate-600"
        }, /*#__PURE__*/React.createElement("iframe", {
          className: "w-full aspect-video",
          src: videoUrl,
          title: "Design Studio Video",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "0MXU5ViGJGRdx7u-3KjnV"
      }, /*#__PURE__*/React.createElement(Video_02, {
        "title": "Explore a Nossa Visão",
        "description": "Assista aos nossos vídeos institucionais e descubra o que nos motiva a criar móveis de alto padrão.",
        "videoUrl": "https://www.youtube.com/embed/cZjCHhIsAVo",
        key: "0MXU5ViGJGRdx7u-3KjnV"
      })));
    } catch (error) {}
    try {
      function Stats_11({
        title = "Nossa Trajetória de Sucesso",
        subtitle = "Excelência Comprovada",
        description1 = "A KingLion se orgulha de uma história rica em conquistas e reconhecimento no setor de marcenaria de luxo.",
        description2 = "Nossos números refletem o compromisso com a qualidade e a satisfação do cliente.",
        stats = [{
          "label": "Fundada",
          "value": "link=&target=_blank&text=2011"
        }, {
          "label": "Projetos Concluídos",
          "value": "link=&target=_blank&text=2500%20%2B"
        }, {
          "label": "Clientes Satisfeitos",
          "value": "link=&target=_blank&text=2500%20%2B"
        }, {
          "label": "link=&target=_blank&text=Empresas%20Atendidas%20no%20Vale",
          "value": "link=&target=_blank&text=20%20%2B"
        }],
        imageUrl = "https://cdn.wegic.ai/assets/onepage/img/1327293d-0111-4425-a6d2-0b3165d35fc7.png?args=q%3A100%2Fcrop%3A605.940594059406%3A0%3Anowe%3A0%3A42.90127944169818%2Fdpr%3A2%2Frs%3Afit%3A1152%3A384%2Fsm%3A1"
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "bg-gray-900 py-16 sm:py-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-base font-semibold leading-7 text-sky-400"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `subtitle`
        }, subtitle)), /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `title`
        }, title)), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-300 lg:max-w-none lg:grid-cols-2"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "DESC"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description1`
        }, description1)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-8"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description2`
        }, description2))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `imageUrl`,
          className: "IMAGE w-full h-auto md:h-64 object-cover rounded-lg bg-slate-100 aspect-[4/3] lg:mt-8",
          src: imageUrl,
          alt: ""
        }))), /*#__PURE__*/React.createElement("dl", {
          className: "mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"
        }, stats.map((stat, statIdx) => /*#__PURE__*/React.createElement("div", {
          key: statIdx,
          className: "flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
        }, /*#__PURE__*/React.createElement("dt", {
          className: "TEXT-CONTENT text-base leading-7 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `stats_${statIdx}_label`
        }, stat.label)), /*#__PURE__*/React.createElement("dd", {
          className: "text-3xl font-semibold tracking-tight text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `stats_${statIdx}_value`
        }, stat.value))))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "C3NUrQxa2mRmF6NPnMUg9"
      }, /*#__PURE__*/React.createElement(Stats_11, {
        "title": "Nossa Trajetória de Sucesso",
        "subtitle": "Excelência Comprovada",
        "description1": "A KingLion se orgulha de uma história rica em conquistas e reconhecimento no setor de marcenaria de luxo.",
        "description2": "Nossos números refletem o compromisso com a qualidade e a satisfação do cliente.",
        "stats": [{
          "label": "Fundada",
          "value": "link=&target=_blank&text=2011"
        }, {
          "label": "Projetos Concluídos",
          "value": "link=&target=_blank&text=2500%20%2B"
        }, {
          "label": "Clientes Satisfeitos",
          "value": "link=&target=_blank&text=2500%20%2B"
        }, {
          "label": "link=&target=_blank&text=Empresas%20Atendidas%20no%20Vale",
          "value": "link=&target=_blank&text=20%20%2B"
        }],
        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/1327293d-0111-4425-a6d2-0b3165d35fc7.png?args=q%3A100%2Fcrop%3A605.940594059406%3A0%3Anowe%3A0%3A42.90127944169818%2Fdpr%3A2%2Frs%3Afit%3A1152%3A384%2Fsm%3A1",
        key: "C3NUrQxa2mRmF6NPnMUg9"
      })));
    } catch (error) {}
    try {
      function CallToAction_14({
        title = 'Explore Career Opportunities',
        description = 'Join our creative team to work on groundbreaking projects. Enjoy benefits like flexible schedules, remote work options, and a supportive community.',
        imageUrl = 'https://source.unsplash.com/random/1200x1000/?team,office',
        benefits = [{
          text: 'Creative freedom and project ownership',
          icon: 'fa-solid fa-check-circle'
        }, {
          text: 'Inclusive and supportive team culture',
          icon: 'fa-solid fa-check-circle'
        }, {
          text: 'Opportunities for professional growth',
          icon: 'fa-solid fa-check-circle'
        }, {
          text: 'Work-life balance prioritized',
          icon: 'fa-solid fa-check-circle'
        }],
        backgroundColor = {
          colorA: '#80caff',
          colorB: '#4f46e5'
        },
        jobPostingsLinkTextAttr = 'text=See our job postings&link=/',
        jobPostingsLinkIcon = 'fa-solid fa-arrow-right'
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-gray-900 py-16 sm:py-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative isolate"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto overflow-hidden flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "imageUrl",
          className: "IMAGE h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm",
          src: imageUrl,
          alt: imageUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "w-full flex-auto"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description)), /*#__PURE__*/React.createElement("ul", {
          role: "list",
          className: "mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
        }, benefits.map((benefit, index) => /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "flex gap-x-3"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `benefits_${index}_icon`,
          icon: benefit.icon,
          iconLibrary: "FontAwesome",
          className: "text-lg text-white/80"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: `benefits_${index}_text`
        }, benefit.text)))), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 flex"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "TEXT-LINK text-sm group flex items-center gap-1 font-semibold leading-6 text-sky-400"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "jobPostingsLinkTextAttr"
        }, jobPostingsLinkTextAttr), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "jobPostingsLinkIcon",
          icon: jobPostingsLinkIcon,
          className: "group-hover:translate-x-1 transition-all duration-300"
        })))))), /*#__PURE__*/React.createElement("div", {
          className: "absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("div", {
          className: `aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-25`,
          style: {
            clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
          }
        }))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "HXJbKIGaQAXPy-vZVJwUT"
      }, /*#__PURE__*/React.createElement(CallToAction_14, {
        "title": "Entre em Contato Conosco",
        "description": "Estamos prontos para transformar suas ideias em realidade. Entre em contato para saber mais sobre nossos serviços.",
        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/0ac5540a-81ef-40ad-9a01-d28cdf59c7f1.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A2112%3A2112%2Fsm%3A1",
        "benefits": [{
          "text": "Atendimento personalizado",
          "icon": "fa-solid fa-check-circle"
        }, {
          "text": "Soluções sob medida",
          "icon": "fa-solid fa-check-circle"
        }, {
          "text": "Compromisso com a qualidade",
          "icon": "fa-solid fa-check-circle"
        }, {
          "text": "Experiência comprovada",
          "icon": "fa-solid fa-check-circle"
        }],
        "backgroundColor": {
          "colorA": "#80caff",
          "colorB": "#4f46e5"
        },
        "jobPostingsLinkTextAttr": "link=https%3A%2F%2Fwww.instagram.com%2Fkinglionmoveisplanejadosbr%2F&target=_blank&text=Veja%20nossas%20oportunidades",
        "jobPostingsLinkIcon": "fa-solid fa-arrow-right",
        key: "HXJbKIGaQAXPy-vZVJwUT"
      })));
    } catch (error) {}
    routerList.push({
      path: "sobre-nos",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  {
    const list = [];
    try {
      function Header_05({
        title = "Welcome to Our Design Studio",
        description = "Explore our innovative and creative solutions tailored for your business. Let's bring your vision to life together.",
        imageUrl = "https://source.unsplash.com/random/3230x1900/?work,design",
        backgroundColor = {
          colorA: "#ff4694",
          colorB: "#776fff"
        }
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          isFCP: true,
          isFCP: true,
          isFCP: true,
          isFCP: true,
          isFCP: true,
          propKey: "imageUrl",
          className: "IMAGE absolute inset-0 -z-10 opacity-20 h-full w-full object-cover rounded-lg bg-slate-100",
          src: imageUrl,
          alt: imageUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("div", {
          className: `aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-20`,
          style: {
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("div", {
          className: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20",
          style: {
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl text-center"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-bold tracking-tight text-white sm:text-6xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "15K2ak2qp4-YaHY0G-unq"
      }, /*#__PURE__*/React.createElement(Header_05, {
        "title": "Portfólio de Excelência",
        "description": "Descubra os projetos que exemplificam a maestria e o design sofisticado da KingLion.",
        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/a118bd78-6f40-4b7e-9e4d-02adeda948bd.jpeg",
        "backgroundColor": {
          "colorA": "#D4AF37",
          "colorB": "#8B4513"
        },
        key: "15K2ak2qp4-YaHY0G-unq"
      })));
    } catch (error) {}
    try {
      function Gallery_01({
        title = "Innovative Designs",
        description = "Explore our unique and creative design gallery that showcases our expertise in bringing ideas to life.",
        images = [{
          url: "https://source.unsplash.com/700x800/?design,creative",
          name: "Creative Expansion"
        }, {
          url: "https://source.unsplash.com/700x800/?artwork,visualization",
          name: "Artistic Visualization"
        }, {
          url: "https://source.unsplash.com/700x800/?studio,concept",
          name: "Conceptual Studio"
        }, {
          url: "https://source.unsplash.com/700x800/?project,implementation",
          name: "Project Implementation"
        }, {
          url: "https://source.unsplash.com/700x800/?innovation,development",
          name: "Innovative Development"
        }, {
          url: "https://source.unsplash.com/700x800/?technology,startup",
          name: "Technology Startup"
        }, {
          url: "https://source.unsplash.com/700x800/?cybersecurity",
          name: "Cybersecurity Insights"
        }, {
          url: "https://source.unsplash.com/700x800/?virtual,reality",
          name: "Virtual Reality Experiences"
        }, {
          url: "https://source.unsplash.com/700x800/?sustainable,energy",
          name: "Sustainable Energy"
        }, {
          url: "https://source.unsplash.com/700x800/?artificial,intelligence",
          name: "Artificial Intelligence"
        }]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "lg:flex lg:items-end lg:justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-md mx-auto text-center lg:text-left lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))))), /*#__PURE__*/React.createElement("div", {
          className: "flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x"
        }, images.map((image, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "relative overflow-hidden snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `images_${index}_url`,
          className: "IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100",
          src: image.url,
          alt: image.name
        }), /*#__PURE__*/React.createElement("p", {
          className: "TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `images_${index}_name`
        }, image.name)))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "Qdu_DJHLnfJ0wwSPyirHD"
      }, /*#__PURE__*/React.createElement(Gallery_01, {
        "title": "Projetos Inovadores",
        "description": "Explore nossa galeria de design exclusivo que destaca nossa expertise em transformar ideias em realidade.",
        "images": [{
          "url": "https://cdn.wegic.ai/assets/onepage/img/c2138e1c-5f3b-4264-bc78-1bf7f8e54c9c.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "Elegância Contemporânea"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/ca9b8b70-23ff-4c69-a1f6-ec65f4a94d6a.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "Design Sob Medida"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/5ae0ba66-1c51-49d1-83f4-e4bf5f76e131.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "Artesanato de Excelência"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/fe0c479b-80a6-4d28-95a0-8d28f4b3b47c.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "link=&target=_blank&text=Sala%20de%20Atendimento"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/03bced96-4585-45be-8be8-ae0728b0dccf.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "Escritório Moderno"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/981e7231-3d5e-4ada-a126-fcad8777c8d8.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "name": "Design Interior"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/a4b28c5b-ba86-44c3-b3e2-f8a896b36463.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "link=&target=_blank&text=M%C3%B3veis%20Empresariais%20"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/cca99607-5059-432d-a4ca-4d7bc72170ac.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "link=&target=_blank&text=Salas%20de%20Atendimento"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/2a3a5b07-301b-4014-a1e2-67c6e498dad3.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "link=&target=_blank&text=Canto%20Alem%C3%A3o%20Sofisticado"
        }, {
          "url": "https://cdn.wegic.ai/assets/onepage/img/588243c7-0bfe-4df0-81cc-d6fb647352d3.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A600%3A800%2Fsm%3A1",
          "name": "Alto Padrão"
        }],
        key: "Qdu_DJHLnfJ0wwSPyirHD"
      })));
    } catch (error) {}
    try {
      function Categories_05({
        title = "Explore Nossas Categorias",
        categories = [{
          "name": "link=&target=_blank&text=Projetos",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/fcbdda71-9c77-49d7-a411-fc010463c613.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A560%3A420%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/7fa13fb1-64de-4b26-857b-8ebf6e879543.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/060104bc-00d5-4d5e-bcb3-f6d9148f3553.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/83887ed5-7689-4a82-a9b8-3a4b21667df9.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Móveis Corporativos",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/9781655b-5331-414f-91f4-50b313cc6f6d.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A560%3A420%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/c0092273-5fb4-4bcc-b142-2e73e643611d.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/35aae295-7950-4a45-b236-8d1781a3d04c.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/fb262857-9b97-4b5a-87c1-91507315f949.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Cozinhas Executivas",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/fd043d39-938f-415c-aab3-052284957166.jpg?args=q%3A100%2Fcrop%3A1069.3069306930695%3A801.9801980198021%3Anowe%3A0%3A349.3125%2Fdpr%3A2%2Frs%3Afit%3A816%3A612%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/a162a4d2-3422-4af3-8fe0-ee98a8cce4a0.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/860f5a4b-9b34-43ac-9123-ee47e057cfad.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/2b0a34a9-7c4c-4623-aa38-84faf2f06cae.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Móveis Residenciais",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/b86cd85b-842d-41a7-a0b3-39bf38e7d5b4.jpg?args=q%3A100%2Fcrop%3A1069.3069306930695%3A801.9801980198021%3Anowe%3A0%3A349.3125%2Fdpr%3A2%2Frs%3Afit%3A816%3A612%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/a1d3ed5f-196d-4ef9-aac3-40b40c3c3894.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/df8ad8f2-c7b4-44cb-b56f-cc6e74c17859.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/df7d47f8-ed92-4cad-bb50-163ad569a6a9.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }],
        allCategoriesText = "text=Ver Galeria&link=#gallery",
        allCategoriesTextIcon = "fa-solid fa-arrow-right"
      }) {
        const [activeCategory, setActiveCategory] = React.useState(null);
        const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
        const openGallery = index => {
          setActiveCategory(index);
          setIsGalleryOpen(true);
        };
        const closeGallery = () => {
          setIsGalleryOpen(false);
          setActiveCategory(null);
        };
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-center text-center md:justify-between"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("div", {
          className: "hidden md:block"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY group inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-slate-500 uppercase transition-all duration-200 rounded hover:text-sky-700 focus:text-sky-700 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:outline-none dark:text-slate-300 dark:hover:text-white",
          onClick: () => setIsGalleryOpen(true)
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "allCategoriesText"
        }, allCategoriesText), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "allCategoriesTextIcon",
          icon: allCategoriesTextIcon,
          iconLibrary: "FontAwesome",
          className: "ml-1.5 -mt-0.5 text-xs text-slate-500 dark:text-slate-300 group-hover:text-sky-700 dark:group-hover:text-white"
        })))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-2 mt-8 text-center sm:mt-12 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 sm:text-left"
        }, categories.map((category, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative group cursor-pointer",
          onClick: () => openGallery(index)
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `categories_${index}_imageUrl`,
          className: "IMAGE overflow-hidden aspect-[4/3] rounded-2xl object-cover w-full h-auto transition-transform duration-300 transform hover:scale-105",
          src: category.imageUrl,
          alt: category.name
        }), /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-SECONDARY mt-5 text-lg font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "text-lg font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `categories_${index}_name`
        }, category.name))), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-sm text-slate-500 font-medium mt-1.5 dark:text-slate-400"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `categories_${index}_description`
        }, category.description))))))), isGalleryOpen && activeCategory !== null && /*#__PURE__*/React.createElement("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative w-full max-w-4xl p-4"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: closeGallery,
          className: "absolute top-4 right-4 text-white text-2xl focus:outline-none"
        }, "\xD7"), /*#__PURE__*/React.createElement("div", {
          className: "flex overflow-x-auto space-x-4 p-4"
        }, categories[activeCategory].gallery.map((image, index) => /*#__PURE__*/React.createElement(EditableImg, {
          key: index,
          propKey: `categories_${activeCategory}_gallery_${index}`,
          src: image,
          alt: `Gallery image ${index + 1}`,
          className: "w-64 h-64 object-cover rounded-lg flex-shrink-0"
        }))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "eBxDR2hORZmoQNH0pzHeV"
      }, /*#__PURE__*/React.createElement(Categories_05, {
        "title": "Explore Nossas Categorias",
        "categories": [{
          "name": "link=&target=_blank&text=Projetos",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/fcbdda71-9c77-49d7-a411-fc010463c613.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A560%3A420%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/7fa13fb1-64de-4b26-857b-8ebf6e879543.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/060104bc-00d5-4d5e-bcb3-f6d9148f3553.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/83887ed5-7689-4a82-a9b8-3a4b21667df9.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Móveis Corporativos",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/9781655b-5331-414f-91f4-50b313cc6f6d.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A560%3A420%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/c0092273-5fb4-4bcc-b142-2e73e643611d.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/35aae295-7950-4a45-b236-8d1781a3d04c.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/fb262857-9b97-4b5a-87c1-91507315f949.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Cozinhas Executivas",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/fd043d39-938f-415c-aab3-052284957166.jpg?args=q%3A100%2Fcrop%3A1069.3069306930695%3A801.9801980198021%3Anowe%3A0%3A349.3125%2Fdpr%3A2%2Frs%3Afit%3A816%3A612%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/a162a4d2-3422-4af3-8fe0-ee98a8cce4a0.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/860f5a4b-9b34-43ac-9123-ee47e057cfad.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/2b0a34a9-7c4c-4623-aa38-84faf2f06cae.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }, {
          "name": "link=&target=_blank&text=Móveis Residenciais",
          "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/b86cd85b-842d-41a7-a0b3-39bf38e7d5b4.jpg?args=q%3A100%2Fcrop%3A1069.3069306930695%3A801.9801980198021%3Anowe%3A0%3A349.3125%2Fdpr%3A2%2Frs%3Afit%3A816%3A612%2Fsm%3A1",
          "gallery": ["https://cdn.wegic.ai/assets/onepage/img/a1d3ed5f-196d-4ef9-aac3-40b40c3c3894.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/df8ad8f2-c7b4-44cb-b56f-cc6e74c17859.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/df7d47f8-ed92-4cad-bb50-163ad569a6a9.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A512%3A512%2Fsm%3A1"]
        }],
        "allCategoriesText": "text=Ver Galeria&link=#gallery",
        "allCategoriesTextIcon": "fa-solid fa-arrow-right",
        key: "eBxDR2hORZmoQNH0pzHeV"
      })));
    } catch (error) {}
    try {
      function Carousel_02({
        prevSlideIcon = "fa-solid fa-chevron-left",
        nextSlideIcon = "fa-solid fa-chevron-right",
        buttonPrevious = "Anterior",
        buttonNext = "Próximo",
        images = [{
          "src": "https://cdn.wegic.ai/assets/onepage/img/2ad36070-dbc2-4144-ad6c-bdd5e6e06bc6.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "Espaço de descompressão empresarial",
          "description": "Seu principal objetivo é promover um tempo de relaxamento, fazendo com que voltem às suas atividades revigorados."
        }, {
          "src": "https://cdn.wegic.ai/assets/onepage/img/df8ea9cd-a592-4bdf-b6ba-2f6d1542c351.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "Reuniões Colaborativas",
          "description": "Envolva sua equipe em um ambiente confortável e inspirador."
        }, {
          "src": "https://cdn.wegic.ai/assets/onepage/img/5aaf3864-aaa5-42f7-9897-c0baf64ba81e.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "Soluções Inovadoras",
          "description": "Impulsione a inovação com nosso design de ponta."
        }],
        interval = 10000
      }) {
        const [activeIndex, setActiveIndex] = React.useState(0);
        const goPrev = () => setActiveIndex(prev => (prev - 1 + images.length) % images.length);
        const goNext = () => setActiveIndex(prev => (prev + 1) % images.length);
        const goToSlide = index => setActiveIndex(index);
        React.useEffect(() => {
          const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % images.length);
          }, interval);
          return () => clearInterval(timer);
        }, [interval, images.length]);
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl w-full mx-auto py-20 px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative"
        }, /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 left-0 right-0 z-10 mx-auto mb-4 flex list-none justify-center p-0"
        }, images.map((_, index) => /*#__PURE__*/React.createElement(EditableButton, {
          key: index,
          type: "button",
          onClick: () => goToSlide(index),
          className: `mx-1 h-1 rounded w-10 flex-initial cursor-pointer border-0 bg-black/10 dark:bg-white/10 p-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-40"}`,
          "aria-label": `Slide ${index + 1}`
        }))), /*#__PURE__*/React.createElement("div", {
          className: "relative w-full overflow-hidden"
        }, images.map((image, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          key: image.src,
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: `float-left w-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block" : "hidden"}`
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `images_${index}_src`,
          className: "IMAGE block w-full aspect-video rounded-lg object-cover bg-slate-100",
          src: image.src,
          alt: ""
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute px-6 inset-x-0 bottom-5 py-5 text-center text-white/90 block"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `images_${index}_label`
        }, image.label)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-sm sm:text-base"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `images_${index}_description`
        }, image.description))))))), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY absolute bottom-0 left-0 top-0 z-10 flex w-1/4 sm:w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
          type: "button",
          onClick: goPrev
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "prevSlideIcon",
          icon: prevSlideIcon,
          iconLibrary: "FontAwesome",
          className: "text-xl text-white/90"
        }), /*#__PURE__*/React.createElement("span", {
          className: "sr-only"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `buttonPrevious`
        }, buttonPrevious))), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY absolute bottom-0 right-0 top-0 z-10 flex w-1/4 sm:w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
          type: "button",
          onClick: goNext
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "nextSlideIcon",
          icon: nextSlideIcon,
          iconLibrary: "FontAwesome",
          className: "text-xl text-white/90"
        }), /*#__PURE__*/React.createElement("span", {
          className: "sr-only"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `buttonNext`
        }, buttonNext))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "IDzbZ2h3VslZcon3g3qFh"
      }, /*#__PURE__*/React.createElement(Carousel_02, {
        "prevSlideIcon": "fa-solid fa-chevron-left",
        "nextSlideIcon": "fa-solid fa-chevron-right",
        "buttonPrevious": "Anterior",
        "buttonNext": "Próximo",
        "images": [{
          "src": "https://cdn.wegic.ai/assets/onepage/img/2ad36070-dbc2-4144-ad6c-bdd5e6e06bc6.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "link=&target=_blank&text=Descompress%C3%A3o%20Empresarial",
          "description": "link=&target=_blank&text=Promova%20um%20tempo%20de%20relaxamento%2C%20para%20voltarem%20com%20suas%20atividades%20revigorados."
        }, {
          "src": "https://cdn.wegic.ai/assets/onepage/img/df8ea9cd-a592-4bdf-b6ba-2f6d1542c351.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "Reuniões Colaborativas",
          "description": "Envolva sua equipe em um ambiente confortável e inspirador."
        }, {
          "src": "https://cdn.wegic.ai/assets/onepage/img/5aaf3864-aaa5-42f7-9897-c0baf64ba81e.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1",
          "label": "Soluções Inovadoras",
          "description": "Impulsione a inovação com nosso design de ponta."
        }],
        "interval": 10000,
        key: "IDzbZ2h3VslZcon3g3qFh"
      })));
    } catch (error) {}
    try {
      function Reviews_02({
        title = "Avaliações dos Nossos Projetos",
        reviews = [{
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Qualidade do Design",
          "date": "14 de Março, 2024",
          "text": "Uma variedade impressionante de designs e um suporte ao cliente excepcional.",
          "reviewer": "Carlos Silva",
          "avatarUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/b7d88c71-3650-4f65-b048-aaeacd7ef611.jpeg"
        }, {
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Acabamento de Primeira",
          "date": "26 de Fevereiro, 2024",
          "text": "Produto incrível com um acabamento impecável. Recomendo fortemente.",
          "reviewer": "Ana Costa",
          "avatarUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/0ab5b442-bedd-46da-be11-237d8a3a2c2c.jpeg"
        }, {
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Atendimento ao Cliente",
          "date": "8 de Fevereiro, 2024",
          "text": "Suporte rápido e amigável! Resolveram minhas dúvidas com eficiência.",
          "reviewer": "Pedro Almeida",
          "avatarUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c7f67698-ff62-478f-b96e-26e2a3981b9f.jpeg"
        }]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-12 bg-white sm:py-16 lg:py-20 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full text-center lg:text-left"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "TITLE-PRIMARY text-4xl font-semibold font-normal text-slate-900 dark:text-slate-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title))), /*#__PURE__*/React.createElement("ul", {
          className: "space-y-6 mt-9"
        }, reviews.map((review, index) => /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "bg-white border border-black/10 dark:border-white/10 rounded-xl  dark:bg-slate-900"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-6 py-5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "sm:flex sm:items-center sm:justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center space-x-px"
        }, review.rating.map((icon, iconIndex) => /*#__PURE__*/React.createElement(EditableIcon, {
          key: iconIndex,
          propKey: `reviews_${index}_rating_${iconIndex}`,
          icon: icon,
          iconLibrary: "FontAwesome",
          className: "text-amber-500 text-lg"
        }))), /*#__PURE__*/React.createElement("span", {
          className: "TEXT-CONTENT text-base flex gap-1 font-normal ml-1.5 text-slate-500 dark:text-white/70"
        }, "for ", /*#__PURE__*/React.createElement("span", {
          className: "font-bold text-slate-900 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `reviews_${index}_aspect`
        }, review.aspect)))), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-sm mt-2.5 sm:mt-0 font-normal text-slate-500 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `reviews_${index}_date`
        }, review.date))), /*#__PURE__*/React.createElement("blockquote", {
          className: "mt-4 sm:mt-6"
        }, /*#__PURE__*/React.createElement("p", {
          className: "TEXT-CONTENT text-base font-normal leading-7 text-slate-600 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `reviews_${index}_text`
        }, review.text))), /*#__PURE__*/React.createElement("div", {
          className: "flex items-center mt-5 sm:mt-8"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `reviews_${index}_avatarUrl`,
          className: "IMAGE flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-500 object-cover aspect-[1/1]",
          src: review.avatarUrl,
          alt: review.avatarUrl
        }), /*#__PURE__*/React.createElement("span", {
          className: "TEXT-CONTENT ml-2.5 text-sm font-bold text-slate-900 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `reviews_${index}_reviewer`
        }, review.reviewer)))))))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "Roi6Z9tl7ENQ7fyDgpjJQ"
      }, /*#__PURE__*/React.createElement(Reviews_02, {
        "title": "Avaliações dos Nossos Projetos",
        "reviews": [{
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Qualidade do Design",
          "date": "14 de Março, 2024",
          "text": "link=&target=_blank&text=%3Cspan%20style%3D%22color%3A%20rgb%280%2C%200%2C%200%29%3B%20font-family%3A%20Roboto%2C%20%26quot%3BHelvetica%20Neue%26quot%3B%2C%20Arial%2C%20sans-serif%3B%20font-size%3A%2014px%3B%22%3E%C3%93timos%20profissionais%20e%20execu%C3%A7%C3%A3o%20de%20excel%C3%AAncia%2C%20sem%20palavras%2C%20atendimento%20r%C3%A1pido%20e%20profissional.%3C%2Fspan%3E",
          "reviewer": "link=&target=_blank&text=Fernanda%20Stricagnolo",
          "avatarUrl": "https://cdn.wegic.ai/assets/onepage/img/c3969f91-df06-40b1-b89e-7570ddb58c67.jpeg?args=q%3A85%2Frs%3Afit%3A48%3A48%2Fdpr%3A2%2Fsm%3A1"
        }, {
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Acabamento de Primeira",
          "date": "26 de Fevereiro, 2024",
          "text": "link=&target=_blank&text=%3Cspan%20style%3D%22color%3A%20rgb%280%2C%200%2C%200%29%3B%20font-family%3A%20Roboto%2C%20%26quot%3BHelvetica%20Neue%26quot%3B%2C%20Arial%2C%20sans-serif%3B%20font-size%3A%2014px%3B%22%3E%C3%93timo%20execu%C3%A7%C3%A3o%2C%20fazem%20o%20projeto%20como%20pedimos%20e%20com%20cuidado%20nos%20pequenos%20detalhes%21%3C%2Fspan%3E",
          "reviewer": "link=&target=_blank&text=Goretti%20Mathias",
          "avatarUrl": "https://cdn.wegic.ai/assets/onepage/img/06b0748e-3d51-463c-9ada-a78bddf6657f.jpeg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A48%3A48%2Fsm%3A1"
        }, {
          "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
          "aspect": "Atendimento ao Cliente",
          "date": "8 de Fevereiro, 2024",
          "text": "link=&target=_blank&text=%3Cspan%20style%3D%22color%3A%20rgb%280%2C%200%2C%200%29%3B%20font-family%3A%20Roboto%2C%20%26quot%3BHelvetica%20Neue%26quot%3B%2C%20Arial%2C%20sans-serif%3B%20font-size%3A%2014px%3B%22%3EExcelentes%20profissionais%2C%20cuidadosos%20do%20in%C3%ADcio%20ao%20fim%20do%20projeto%2C%20atentam%20aos%20m%C3%ADnimos%20detalhes%21%3C%2Fspan%3E",
          "reviewer": "link=&target=_blank&text=Guilherme%20Moura",
          "avatarUrl": "https://cdn.wegic.ai/assets/onepage/img/825fb296-90f4-4fe6-bfd4-6ed1c7e6d8d9.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A48%3A48%2Fsm%3A1"
        }],
        key: "Roi6Z9tl7ENQ7fyDgpjJQ"
      })));
    } catch (error) {}
    routerList.push({
      path: "portfolio",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  {
    const list = [];
    try {
      function Gallery_02({
        title = "link=&target=_blank&text=Galeria KingLion",
        descriptions = ["link=&target=_blank&text=Móveis criados com design único, pensado especialmente para cada ambiente, para cada cliente. Realizando sonhos."],
        images = ["https://cdn.wegic.ai/assets/onepage/img/a4c53bc1-a6cb-453b-80e6-5d9391587f88.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/087b735c-12ae-499c-8d16-dced7f8c99d1.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/051483ae-32e3-4a6c-97ce-16410f2841c3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/bf741e55-9c13-499d-9e51-f3e7b5a4dba7.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/72fc205a-774d-429f-90b6-12193e7fc910.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/19a6f813-57bb-4a20-a142-d35e02af23ff.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6bef3db3-70c2-43b6-8ef1-8c4d7365904f.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/358de582-fef1-4b30-9923-f86c89ad1cd2.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/ca58bda6-2fcf-4b2c-9213-55ba645da9d6.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b223888b-6c03-4ec0-b773-3135efe8ee6f.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/8da57f6e-5cf5-47f0-827e-020ba60c46ad.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/cab9611c-fd64-4cef-b365-90c4eead58ca.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1"]
      }) {
        const [selectedImage, setSelectedImage] = React.useState(null);
        const openModal = image => {
          setSelectedImage(image);
        };
        const closeModal = () => {
          setSelectedImage(null);
        };
        return /*#__PURE__*/React.createElement("section", {
          className: "bg-white dark:bg-slate-800 py-20"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-10 px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("div", {
          className: "mt-4 lg:mt-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8"
        }, descriptions.map((description, index) => /*#__PURE__*/React.createElement("p", {
          key: index,
          className: "DESC text-base font-normal text-slate-700 dark:text-slate-300 mt-4 lg:mt-0"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `descriptions_${index}`
        }, description))))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 sm:mt-16 lg:mt-16"
        }, images.map((imageUrl, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "cursor-pointer",
          onClick: () => openModal(imageUrl)
        }, /*#__PURE__*/React.createElement(EditableImg, {
          isFCP: true,
          isFCP: true,
          isFCP: true,
          propKey: `images_${index}`,
          className: "IMAGE w-[10rem] h-[10rem] aspect-[4/3] object-cover rounded-lg bg-slate-100 transition-transform duration-300 hover:scale-105",
          src: imageUrl,
          alt: `Gallery image ${index + 1}`
        })))))), selectedImage && /*#__PURE__*/React.createElement("div", {
          className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
          onClick: closeModal
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-4xl max-h-[90vh] overflow-auto"
        }, /*#__PURE__*/React.createElement("img", {
          src: selectedImage,
          alt: "Expanded view",
          className: "w-full h-auto"
        }))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "44xEygGNgE61FoLUuZ7eR"
      }, /*#__PURE__*/React.createElement(Gallery_02, {
        "title": "link=&target=_blank&text=Galeria KingLion",
        "descriptions": ["link=&target=_blank&text=Móveis criados com design único, pensado especialmente para cada ambiente, para cada cliente. Realizando sonhos."],
        "images": ["https://cdn.wegic.ai/assets/onepage/img/a4c53bc1-a6cb-453b-80e6-5d9391587f88.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/087b735c-12ae-499c-8d16-dced7f8c99d1.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/051483ae-32e3-4a6c-97ce-16410f2841c3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/bf741e55-9c13-499d-9e51-f3e7b5a4dba7.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/72fc205a-774d-429f-90b6-12193e7fc910.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/19a6f813-57bb-4a20-a142-d35e02af23ff.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6bef3db3-70c2-43b6-8ef1-8c4d7365904f.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/358de582-fef1-4b30-9923-f86c89ad1cd2.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/ca58bda6-2fcf-4b2c-9213-55ba645da9d6.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b223888b-6c03-4ec0-b773-3135efe8ee6f.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/8da57f6e-5cf5-47f0-827e-020ba60c46ad.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/cab9611c-fd64-4cef-b365-90c4eead58ca.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1"],
        key: "44xEygGNgE61FoLUuZ7eR"
      })));
    } catch (error) {}
    try {
      function Gallery_02({
        title = "link=&target=_blank&text=Móveis KingLion",
        descriptions = ["Explore nossa galeria única e criativa de design que demonstra nossa expertise em transformar ideias em realidade."],
        images = ["https://cdn.wegic.ai/assets/onepage/img/96579f6f-53e0-4307-8551-3789ba7fd7e4.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b7f0988f-e94a-4189-b676-6be1faa59052.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b8d19734-b2e6-433b-9c29-47b6dd391462.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/fdb61b55-f5b7-4b1e-a18e-85b54f9495e9.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/88a1f8cc-2fbb-4a11-88ac-6c0c9ce47430.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/9b6b9763-6f3d-45ba-b89c-82a4f2a9f788.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/074a899f-f95f-4573-9d24-8f015148b3e3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/3974a195-9bf1-40ff-a0ad-728a1e48f8d5.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6e4f0fc9-8918-4de4-8460-e5ad1aad1cb7.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/7c7ac1d8-0867-4a26-98f9-c32fef88bdee.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/16e56c89-de2a-4b7e-8d06-461c3919ff2b.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/82e8d0b9-cc55-46fb-8064-38635e1da3f3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1"]
      }) {
        const [selectedImage, setSelectedImage] = React.useState(null);
        const openModal = image => {
          setSelectedImage(image);
        };
        const closeModal = () => {
          setSelectedImage(null);
        };
        return /*#__PURE__*/React.createElement("section", {
          className: "bg-white dark:bg-slate-800 py-10"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-10 px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("div", {
          className: "mt-4 lg:mt-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8"
        }, descriptions.map((description, index) => /*#__PURE__*/React.createElement("p", {
          key: index,
          className: "DESC text-base font-normal text-slate-700 dark:text-slate-300 mt-4 lg:mt-0"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `descriptions_${index}`
        }, description))))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 sm:mt-16 lg:mt-16"
        }, images.map((imageUrl, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "cursor-pointer transition-transform duration-300 hover:scale-105",
          onClick: () => openModal(imageUrl)
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `images_${index}`,
          className: "IMAGE w-[10rem] h-[10rem] aspect-[4/3] object-cover rounded-lg bg-slate-100",
          src: imageUrl,
          alt: `Gallery image ${index + 1}`
        })))))), selectedImage && /*#__PURE__*/React.createElement("div", {
          className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
          onClick: closeModal
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-4xl max-h-[90vh] overflow-auto"
        }, /*#__PURE__*/React.createElement("img", {
          src: selectedImage,
          alt: "Expanded view",
          className: "w-full h-auto"
        }))));
      }
      list.push( /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "FUVdJBpPWlqY4CuYo4FZI"
      }, /*#__PURE__*/React.createElement(Gallery_02, {
        "title": "link=&target=_blank&text=Móveis KingLion",
        "descriptions": ["Explore nossa galeria única e criativa de design que demonstra nossa expertise em transformar ideias em realidade."],
        "images": ["https://cdn.wegic.ai/assets/onepage/img/96579f6f-53e0-4307-8551-3789ba7fd7e4.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b7f0988f-e94a-4189-b676-6be1faa59052.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/b8d19734-b2e6-433b-9c29-47b6dd391462.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A800%3A800%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/fdb61b55-f5b7-4b1e-a18e-85b54f9495e9.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/88a1f8cc-2fbb-4a11-88ac-6c0c9ce47430.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/9b6b9763-6f3d-45ba-b89c-82a4f2a9f788.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/074a899f-f95f-4573-9d24-8f015148b3e3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/3974a195-9bf1-40ff-a0ad-728a1e48f8d5.png?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6e4f0fc9-8918-4de4-8460-e5ad1aad1cb7.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/7c7ac1d8-0867-4a26-98f9-c32fef88bdee.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/16e56c89-de2a-4b7e-8d06-461c3919ff2b.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/82e8d0b9-cc55-46fb-8064-38635e1da3f3.jpg?args=q%3A85%2Fdpr%3A2%2Frs%3Afit%3A320%3A320%2Fsm%3A1"],
        key: "FUVdJBpPWlqY4CuYo4FZI"
      })));
    } catch (error) {}
    routerList.push({
      path: "galeria",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  try {
    function Footer_02({
      navigationItems = [{
        "titleAttr": "text=Sobre Nós&link=/sobre-nos"
      }, {
        "titleAttr": "text=Galeria&link=/galeria"
      }, {
        "titleAttr": "text=Portfólio&link=/portfolio"
      }, {
        "titleAttr": "text=Contato&link=/pagina-inicial#contact"
      }],
      socialMediaItems = [{
        "href": "#"
      }, {
        "icon": "icon=fa-brands%20fa-facebook&link=https%3A%2F%2Fwww.facebook.com%2Fkinglionmoveisplanejadosbr&target=_blank",
        "href": "#"
      }, {
        "icon": "icon=fa-brands%20fa-instagram&link=https%3A%2F%2Fwww.instagram.com%2Fkinglionmoveisplanejadosbr%2F&target=_blank",
        "href": "#"
      }, {
        "href": "#"
      }],
      copyrightText = "link=&target=_blank&text=%C2%A9%20KingLion%20M%C3%B3veis%20de%20Alto%20Padr%C3%A3o%202025%2C%20Todos%20os%20Direitos%20Reservados"
    }) {
      return /*#__PURE__*/React.createElement("section", {
        className: "bg-slate-50 dark:bg-slate-800 px-6 py-20 md:px-8"
      }, /*#__PURE__*/React.createElement(AnimateInView, {
        type: "rise"
      }, /*#__PURE__*/React.createElement("div", {
        className: " mx-auto max-w-7xl flex flex-col gap-20"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center gap-8 md:justify-between md:flex-row"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "flex items-center gap-8"
      }, navigationItems.map((item, index) => /*#__PURE__*/React.createElement("li", {
        key: item.title,
        href: item.href
      }, /*#__PURE__*/React.createElement(EditableButton, {
        className: "TEXT-LINK font-semibold text-slate-900 dark:text-slate-50  hover:text-sky-400  dark:hover:text-sky-400 focus:text-sky-500 dark:focus:text-sky-500"
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: `navigationItems_${index}_titleAttr`
      }, item.titleAttr))))), /*#__PURE__*/React.createElement("ul", {
        className: "flex items-center gap-8"
      }, socialMediaItems.map((item, index) => /*#__PURE__*/React.createElement("li", {
        key: item.icon,
        href: item.href
      }, /*#__PURE__*/React.createElement(EditableButton, {
        className: "TEXT-LINK text-slate-900 dark:text-slate-50 hover:text-sky-400 dark:hover:text-sky-400  dark:focus:text-slate-500"
      }, /*#__PURE__*/React.createElement(EditableIcon, {
        propKey: `socialMediaItems_${index}_icon`,
        icon: item.icon,
        iconLibrary: "FontAwesome",
        className: "text-6xl"
      })))))), /*#__PURE__*/React.createElement("p", {
        className: "w-full text-sm text-center text-slate-600 lg:mt-0 dark:text-slate-400"
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: "copyrightText"
      }, copyrightText)))));
    }
    Footer_1867204374601216001 = /*#__PURE__*/React.createElement(ErrorBoundary, {
      key: "cj5UkqZw6MB_rgtW6MLF_"
    }, /*#__PURE__*/React.createElement(Footer_02, {
      "navigationItems": [{
        "titleAttr": "text=Sobre Nós&link=/sobre-nos"
      }, {
        "titleAttr": "text=Galeria&link=/galeria"
      }, {
        "titleAttr": "text=Portfólio&link=/portfolio"
      }, {
        "titleAttr": "text=Contato&link=/pagina-inicial#contact"
      }],
      "socialMediaItems": [{
        "href": "#"
      }, {
        "icon": "icon=fa-brands%20fa-facebook&link=https%3A%2F%2Fwww.facebook.com%2Fkinglionmoveisplanejadosbr&target=_blank",
        "href": "#"
      }, {
        "icon": "icon=fa-brands%20fa-instagram&link=https%3A%2F%2Fwww.instagram.com%2Fkinglionmoveisplanejadosbr%2F&target=_blank",
        "href": "#"
      }, {
        "href": "#"
      }],
      "copyrightText": "link=&target=_blank&text=%C2%A9%20KingLion%20M%C3%B3veis%20de%20Alto%20Padr%C3%A3o%202025%2C%20Todos%20os%20Direitos%20Reservados",
      key: "cj5UkqZw6MB_rgtW6MLF_"
    }));
  } catch (error) {}
  if (defaultRouter && defaultRouter !== "/") {
    const defaultRouterItem = routerList.find(item => {
      if (item.path === defaultRouter) {
        return item;
      }
    });
    routerList.unshift({
      path: '/',
      element: defaultRouterItem.element
    });
  }
  const router = createBrowserRouter(routerList);
  createRoot(document.getElementById('root')).render( /*#__PURE__*/React.createElement(RouterProvider, {
    router: router
  }));
}
render();