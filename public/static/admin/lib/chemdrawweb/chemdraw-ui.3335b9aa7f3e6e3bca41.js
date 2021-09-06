(window.chemdrawweb_jsonp = window.chemdrawweb_jsonp || []).push([[0], {
	314 : function(e, t, n) {},
	469 : function(e, t, n) {
		"use strict";
		n.r(t);
		n(301),
		n(302),
		n(305),
		n(307),
		n(309),
		n(311),
		n(313),
		n(314);
		var o = n(18),
		r = n(173),
		i = function() {
			function e() {}
			return e.isNumber = function(e) {
				return new RegExp("^-?[0-9]*[.]?[0-9]*$").test(e)
			},
			e
		} (),
		a = n(171),
		s = new(function() {
			function e() {
				this.instanceHubs = new WeakMap
			}
			return Object.defineProperty(e.prototype, "activeInstanceHub", {
				get: function() {
					return this._activeInstanceHub
				},
				set: function(e) {
					e && a.CDDocument.setActiveDocument(e.chemDraw.cdDoc),
					this._activeInstanceHub = e
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.setInstanceHub = function(e, t) {
				this.instanceHubs.set(e.view, t)
			},
			e.prototype.getInstanceHub = function(e) {
				return this.instanceHubs.get(e.view)
			},
			e
		} ()),
		c = s;
		Object(o.b)((function(e) {
			e.moduleObjectsHub = s
		}));
		var l, u, p, d, h = function(e) {
			var t = this;
			this.done = function(e) {
				t.instanceHub.chemDraw.processChange(),
				t.instanceHub.mouseEventSource.handlers.forEach((function(t) {
					t.refreshHighlight(e)
				}))
			},
			this.refresh = function() {
				t.done(!0)
			},
			this.instanceHub = c.getInstanceHub(e.getDocument())
		},
		f = n(183),
		m = n(185),
		g = {
			BACKSPACE: 8,
			TAB: 9,
			ENTER: 13,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAUSE: 19,
			CAPS_LOCK: 20,
			ESCAPE: 27,
			SPACE: 32,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			END: 35,
			HOME: 36,
			LEFT_ARROW: 37,
			UP_ARROW: 38,
			RIGHT_ARROW: 39,
			DOWN_ARROW: 40,
			INSERT: 45,
			DELETE: 46,
			KEY_0: 48,
			KEY_1: 49,
			KEY_2: 50,
			KEY_3: 51,
			KEY_4: 52,
			KEY_5: 53,
			KEY_6: 54,
			KEY_7: 55,
			KEY_8: 56,
			KEY_9: 57,
			KEY_A: 65,
			KEY_B: 66,
			KEY_C: 67,
			KEY_D: 68,
			KEY_E: 69,
			KEY_F: 70,
			KEY_G: 71,
			KEY_H: 72,
			KEY_I: 73,
			KEY_J: 74,
			KEY_K: 75,
			KEY_L: 76,
			KEY_M: 77,
			KEY_N: 78,
			KEY_O: 79,
			KEY_P: 80,
			KEY_Q: 81,
			KEY_R: 82,
			KEY_S: 83,
			KEY_T: 84,
			KEY_U: 85,
			KEY_V: 86,
			KEY_W: 87,
			KEY_X: 88,
			KEY_Y: 89,
			KEY_Z: 90,
			LEFT_META: 91,
			RIGHT_META: 92,
			SELECT: 93,
			NUMPAD_0: 96,
			NUMPAD_1: 97,
			NUMPAD_2: 98,
			NUMPAD_3: 99,
			NUMPAD_4: 100,
			NUMPAD_5: 101,
			NUMPAD_6: 102,
			NUMPAD_7: 103,
			NUMPAD_8: 104,
			NUMPAD_9: 105,
			MULTIPLY: 106,
			ADD: 107,
			SUBTRACT: 109,
			DECIMAL: 110,
			DIVIDE: 111,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			NUM_LOCK: 144,
			SCROLL_LOCK: 145,
			SEMICOLON: 186,
			EQUALS: 187,
			COMMA: 188,
			DASH: 189,
			PERIOD: 190,
			FORWARD_SLASH: 191,
			GRAVE_ACCENT: 192,
			OPEN_BRACKET: 219,
			BACK_SLASH: 220,
			CLOSE_BRACKET: 221,
			SINGLE_QUOTE: 222
		},
		b = function() {
			function e(e, t, n) {
				this.port = e,
				this.bounds = t,
				this.tips = n,
				this.tooltipContainer = this.getTooltipContainer(),
				this.tooltip = this.createTooltip(),
				this.show = this.show.bind(this),
				this.hide = this.hide.bind(this),
				l = this
			}
			return e.prototype.show = function() {
				try {
					document.body.removeChild(this.tooltipContainer)
				} catch(e) {}
				document.body.appendChild(this.tooltipContainer);
				var e = this.tooltip;
				e.style.visibility = "hidden",
				this.tooltipContainer.appendChild(e);
				var t = this.bounds,
				n = (t.left + t.right) / 2,
				o = t.bottom + 5,
				r = c.activeInstanceHub.eventPanelController.getEventPanel().getBoundingClientRect();
				o += r.top,
				n += r.left;
				var i = window.innerWidth,
				a = window.innerHeight,
				s = e.getBoundingClientRect();
				n = Math.min(n, i - s.width),
				n = Math.max(n, 0),
				n = Math.floor(n),
				o = Math.min(o, a - s.height),
				o = Math.max(o, 0),
				o = Math.floor(o),
				e.style.left = n + "px",
				e.style.top = o + "px",
				e.style.visibility = "",
				this.addEventListenerToHideTooltip()
			},
			e.prototype.hide = function() {
				l = null,
				window.removeEventListener("mousedown", this.hide, !0),
				window.removeEventListener("keydown", this.hide, !0);
				try {
					document.body.removeChild(this.tooltipContainer)
				} catch(e) {}
			},
			e.prototype.getTooltipContainer = function() {
				var e = document.createElement("div");
				return e.className = "cdd cddroot",
				e.style.width = "auto",
				e.style.height = "auto",
				e
			},
			e.prototype.createTooltip = function() {
				var e = document.createElement("div");
				e.classList.add("cdd-tooltip");
				var t = this.getTipText();
				return e.innerText = t,
				e
			},
			e.prototype.getTipText = function() {
				for (var e = "",
				t = this.tips.size(), n = 0; n < t; n++) {
					n > 0 && (e += "\n"),
					e += this.tips.get(n)
				}
				return e
			},
			e.prototype.addEventListenerToHideTooltip = function() {
				window.addEventListener("mousedown", this.hide, !0),
				window.addEventListener("keydown", this.hide, !0)
			},
			e
		} (),
		y = function() {
			return (y = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		C = function(e) {
			return r.createElement(f.k, y({},
			e, {
				className: e.className ? e.className: "cdd-font",
				onEntered: function() {
					return l && l.hide()
				}
			}))
		},
		v = (u = function(e, t) {
			return (u = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(e, t) {
				e.__proto__ = t
			} ||
			function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			})(e, t)
		},
		function(e, t) {
			function n() {
				this.constructor = e
			}
			u(e, t),
			e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		}),
		w = function() {
			return (w = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		S = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return v(t, e),
			t.prototype.render = function() {
				var e = this.props.className;
				return e || (e = "cdd-dialog-content cdd-align-center"),
				r.createElement(f.k.Body, w({},
				this.props, {
					className: e
				}))
			},
			t
		} (r.Component),
		E = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		D = function() {
			return (D = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		T = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return E(t, e),
			t.prototype.render = function() {
				var e = this.props.className;
				return e || (e = "cdd-dialog-button-panel"),
				r.createElement(f.k.Footer, D({},
				this.props, {
					className: e
				}))
			},
			t
		} (r.Component),
		_ = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		P = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.handleMouseDown = function(e) {
					e.stopPropagation()
				},
				n.show = n.show.bind(n),
				n.hide = n.hide.bind(n),
				n.state = {
					isShow: !0
				},
				n
			}
			return _(t, e),
			t.prototype.componentWillReceiveProps = function(e, t) {
				this.show()
			},
			t.prototype.show = function() {
				this.setState({
					isShow: !0
				})
			},
			t.prototype.hide = function() {
				this.setState({
					isShow: !1
				});
				var e = this.props.instanceHub;
				e || (e = c.activeInstanceHub),
				setTimeout((function() {
					e && e.eventPanelController && e.eventPanelController.setFocus()
				}), 0),
				this.props.onClose && this.props.onClose()
			},
			t.prototype.render = function() {
				return r.createElement("div", {
					className: "modal-container",
					onMouseDown: this.handleMouseDown
				},
				this.renderContent())
			},
			t
		} (r.Component),
		O = n(54); !
		function(e) {
			e[e.Unknown = 0] = "Unknown",
			e[e.Windows = 1] = "Windows",
			e[e.Mac = 2] = "Mac",
			e[e.Android = 3] = "Android",
			e[e.IOS = 4] = "IOS"
		} (p || (p = {})),
		function(e) {
			e[e.Unknown = 0] = "Unknown",
			e[e.Chrome = 1] = "Chrome",
			e[e.Firefox = 2] = "Firefox",
			e[e.IE = 3] = "IE",
			e[e.Edge = 4] = "Edge",
			e[e.OmniWeb = 5] = "OmniWeb",
			e[e.Safari = 6] = "Safari"
		} (d || (d = {}));
		var A = function() {
			function e() {}
			return e.getOSType = function() {
				if (null == e.os) {
					var t = navigator.userAgent.toLowerCase();
					t.includes("windows") ? e.os = p.Windows: t.includes("android") ? e.os = p.Android: t.includes("ipad") || t.includes("iphone") ? e.os = p.IOS: t.includes("macintosh") ? e.os = p.Mac: e.os = p.Unknown
				}
				return e.os
			},
			e.getInternetBrowser = function() {
				if (null == e.browser) {
					var t = navigator.userAgent;
					null != t && "" !== t ? e.isChrome(t) ? e.browser = d.Chrome: e.isFirefox(t) ? e.browser = d.Firefox: e.isIE(t) ? e.browser = d.IE: e.isEdge(t) ? e.browser = d.Edge: e.isSafari(t) ? e.browser = d.Safari: e.isOmniWeb(t) ? e.browser = d.OmniWeb: e.browser = d.Unknown: e.browser = d.Unknown
				}
				return e.browser
			},
			e.isWindows = function() {
				return e.getOSType() === p.Windows
			},
			e.isMac = function() {
				return e.getOSType() === p.Mac
			},
			e.isAndroid = function() {
				return e.getOSType() === p.Android
			},
			e.isChrome = function(t) {
				if (void 0 === t) return e.getInternetBrowser() === d.Chrome;
				var n = t.toLowerCase();
				return n.includes("chrome") && !n.includes("chromium") && !n.includes("edge")
			},
			e.isFirefox = function(t) {
				return void 0 === t ? e.getInternetBrowser() === d.Firefox: t.toLowerCase().includes("firefox") && !t.toLowerCase().includes("seamonkey")
			},
			e.isIE = function(t) {
				return void 0 === t ? e.getInternetBrowser() === d.IE: !!t.toLowerCase().includes("msie") || t.toLowerCase().includes("trident")
			},
			e.isIE11OrLater = function() {
				var e = navigator.userAgent.toLowerCase();
				return ! e.includes("msie") && -1 !== e.search(new RegExp(".*trident.*rv:\\s*[0-9.]+.*"))
			},
			e.isIE9 = function() {
				return navigator.userAgent.includes("MSIE 9.0")
			},
			e.isEdge = function(t) {
				return void 0 === t ? e.getInternetBrowser() === d.Edge: t.toLowerCase().includes("edge")
			},
			e.isIOS = function() {
				return e.getOSType() === p.IOS
			},
			e.isMobile = function() {
				return e.isAndroid() || e.isIOS()
			},
			e.isSafari = function(t) {
				if (void 0 === t) return e.getInternetBrowser() === d.Safari;
				var n = t.toLowerCase();
				return (n.includes("safari") || n.includes("omniweb")) && !n.includes("chrome") && !n.includes("chromium")
			},
			e.getFirefoxVersion = function() {
				var e = navigator.userAgent.match(/firefox\/([\d.]+)/i);
				return e && e.length >= 2 ? O.a.parse(e[1]) : void 0
			},
			e.isOmniWeb = function(e) {
				return e.toLowerCase().includes("omniweb")
			},
			e
		} (),
		x = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		I = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.focusAndSelectInput = function() {
					n.atomNumInput && (n.atomNumInput.focus(), n.atomNumInput.select())
				},
				n.bindInput = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.atomNumInput = t)
					}
				},
				n.state = Object.assign({},
				n.state, {
					errorMessage: ""
				}),
				n
			}
			return x(t, e),
			t.prototype.componentDidMount = function() {
				this.focusAndSelectInput()
			},
			t.prototype.componentDidUpdate = function() {
				this.focusAndSelectInput()
			},
			t.prototype.renderContent = function() {
				var e = this,
				t = function(t) {
					e.setState({
						errorMessage: t
					})
				},
				n = function(n) {
					var o = e.props.onValidate(e.atomNumInput.value);
					o ? t(o) : (t(""), e.hide(), e.props.onSubmit(parseFloat(e.atomNumInput.value)))
				},
				o = function(n) {
					t(""),
					e.hide(),
					e.props.onCancel()
				};
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: o,
					container: this,
					dialogClassName: "cdd-dialog-chain",
					onKeyDown: function(e) {
						e.keyCode === g.ENTER && n()
					}
				},
				r.createElement(S, {
					className: "cdd-dialog-content cdd-align-left"
				},
				r.createElement("div", {
					className: "form-inline"
				},
				r.createElement(f.f, {
					className: "inline"
				},
				this.props.action, " a chain of", " "), r.createElement(f.g, {
					className: "cdd-dialog-input",
					style: {
						width: "50px",
						textAlign: "right"
					},
					type: "text",
					defaultValue: this.props.atomNumber + "",
					ref: function(t) {
						return e.bindInput(t)
					}
				}), r.createElement(f.f, {
					className: "inline"
				},
				" carbon atoms"), r.createElement(f.i, {
					className: "cdd-dialog-error-helpblock"
				},
				this.state.errorMessage || "")), r.createElement("div", {
					className: "cdd-dialog-tip"
				},
				"To create another chain of the same length, hold down the " + (A.isMac() ? "Option": "Alt") + " key and click in the document window.")), r.createElement(T, null, r.createElement(f.b, {
					onClick: n,
					bsClass: "cdd-button-ok"
				},
				this.props.action), r.createElement(f.b, {
					onClick: o,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		H = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		M = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return H(t, e),
			t.prototype.show = function() {
				var e = this,
				t = this.instanceHub.dialogContainerController,
				n = this.presenter,
				o = r.createElement(I, {
					atomNumber: n.numberOfAtoms,
					action: n.actionButtonTitle,
					onSubmit: function(t) {
						n.createChain(Math.floor(t + .4)),
						e.done(!0)
					},
					onCancel: this.refresh,
					onValidate: function(e) {
						if (i.isNumber(e)) {
							var t = parseFloat(e);
							return t ? t > 999 || t < 2 ? "The field value must be between 2 and 999.": "": "The field value is invalid."
						}
						return "The field value is invalid."
					}
				},
				null);
				t.show(o)
			},
			t
		} (h),
		R = function e(t) {
			var n = this;
			this.toString = function() {
				return n.idStr
			},
			this.equals = function(t) {
				var o = !1;
				if (t instanceof e) {
					var r = t;
					o = n.idStr === r.idStr
				}
				return o
			},
			this.idStr = t
		},
		L = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		N = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return L(t, e),
			t.make = function(e) {
				if (!t.registry.has(e)) {
					var n = new t(e);
					t.registry.set(e, n)
				}
				return t.registry.get(e)
			},
			t.registry = new Map,
			t
		} (R),
		k = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		j = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return k(t, e),
			t.prototype.render = function() {
				var e = this;
				return r.createElement("div", {
					className: "cdd-dialog-table-row"
				},
				r.createElement(f.f, {
					className: "cdd-dialog-table-row-header"
				},
				this.props.labelString), r.createElement(f.g, {
					className: "cdd-dialog-table-row-data",
					componentClass: "select",
					defaultValue: this.props.defaultValue + "",
					disabled: !!this.props.disabled,
					onChange: function(t) {
						return e.props.onChange(t.target.selectedIndex)
					},
					inputRef: function(t) {
						t && (t.selectedIndex = e.props.defaultValue)
					}
				},
				this.props.optionStrings.map((function(e, t) {
					return r.createElement("option", {
						key: t,
						value: t
					},
					e)
				}))))
			},
			t
		} (r.Component),
		W = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		F = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onKeyDown = function(e) {
					e.keyCode === g.ENTER ? n.onSubmit() : e.keyCode === g.ESCAPE && n.onCancel()
				},
				n.onCancel = function() {
					n.hide(),
					n.props.refresh()
				},
				n.onSubmit = function() {
					n.props.presenter.applyAtomProperties(),
					n.hide(),
					n.props.refresh()
				},
				n.updateUI = function(e) {
					n.setState({},
					(function() {
						e && e()
					}))
				},
				n.onDefaults = function() {
					n.props.presenter.updateWithDefaults(),
					n.updateUI()
				},
				n.onSubstituentsCountChange = function(e) {
					n.props.presenter.substituentCount = isNaN(parseInt(e.target.value, 10)) ? 0 : parseInt(e.target.value, 10),
					n.updateUI((function() {
						n.atomSubstituentCountText.value = n.props.presenter.substituentCount + ""
					}))
				},
				n.onIsotopeValueChange = function(e) {
					n.props.presenter.isotope = isNaN(parseInt(e.target.value, 10)) ? 0 : parseInt(e.target.value, 10),
					n.updateUI((function() {
						n.atomIsotopeText.value = n.props.presenter.isotope + ""
					}))
				},
				n.onSubstituentsChange = function() {
					n.props.presenter.substituents = n.atomSubstituentSelect.selectedIndex,
					n.updateUI()
				},
				n
			}
			return W(t, e),
			t.prototype.renderContent = function() {
				var e = this;
				return r.createElement(C, {
					onHide: this.onCancel,
					show: this.state.isShow,
					dialogClassName: "cdd-dialog-atom-properties",
					container: this,
					onKeyDown: this.onKeyDown
				},
				r.createElement(S, {
					className: "cdd-dialog-content"
				},
				this.props.showGenericLabels && r.createElement(j, {
					labelString: "Generic Label:",
					key: "Generic Label",
					defaultValue: this.props.presenter.genericLabel,
					optionStrings: this.props.presenter.genericLabelOptionStrings,
					onChange: function(t) {
						e.props.presenter.genericLabel = t,
						e.updateUI()
					}
				}), this.props.presenter.shouldShowSingleAtomProperties && r.createElement(r.Fragment, null, r.createElement(j, {
					labelString: "Charge:",
					key: "Charge",
					defaultValue: this.props.presenter.charge,
					optionStrings: this.props.presenter.chargeOptionStrings,
					onChange: function(t) {
						return e.props.presenter.charge = t
					}
				}), r.createElement(j, {
					labelString: "Radical:",
					key: "Radical",
					defaultValue: this.props.presenter.radical,
					optionStrings: this.props.presenter.radicalOptionStrings,
					onChange: function(t) {
						return e.props.presenter.radical = t
					}
				}), r.createElement("div", {
					className: "cdd-dialog-table-row"
				},
				r.createElement(f.f, {
					className: "cdd-dialog-table-row-header"
				},
				"Isotope:"), r.createElement(f.g, {
					className: "cdd-dialog-table-row-data",
					type: "text",
					defaultValue: this.props.presenter.isotope > 0 ? this.props.presenter.isotope + "": "",
					onChange: this.onIsotopeValueChange,
					inputRef: function(t) {
						return e.atomIsotopeText = t
					}
				}))), this.props.presenter.shouldShowQueryFeatureProperties && r.createElement(r.Fragment, null, r.createElement("div", {
					className: "cdd-dialog-table-row"
				},
				r.createElement(f.f, {
					className: "cdd-dialog-table-row-header"
				},
				"Substituents:"), r.createElement("div", {
					className: "cdd-atom-dialog-substituents-row"
				},
				r.createElement(f.g, {
					className: "cdd-atom-dialog-substituents-row-selection",
					componentClass: "select",
					defaultValue: this.props.presenter.substituents + "",
					onChange: this.onSubstituentsChange,
					inputRef: function(t) {
						e.atomSubstituentSelect = t,
						e.atomSubstituentSelect && (e.atomSubstituentSelect.selectedIndex = e.props.presenter.substituents)
					}
				},
				this.props.presenter.substituentOptionStrings.map((function(e, t) {
					return r.createElement("option", {
						key: t,
						value: t
					},
					e)
				}))), r.createElement("div", {
					className: "cdd-atom-dialog-substituents-row-number-count"
				},
				r.createElement(f.g, {
					type: "number",
					disabled: !this.props.presenter.shouldEnableSubstituents,
					defaultValue: this.props.presenter.substituentCount + "",
					inputRef: function(t) {
						return e.atomSubstituentCountText = t
					},
					onChange: this.onSubstituentsCountChange,
					max: this.props.presenter.maxSubstituentsNumber,
					min: this.props.presenter.minSubstituentsNumber
				})))), r.createElement(j, {
					labelString: "Implicit Hydrogens:",
					key: "Implicit Hydrogens",
					defaultValue: this.props.presenter.implicitHydrogens,
					optionStrings: this.props.presenter.implicitHydrogenOptionStrings,
					onChange: function(t) {
						return e.props.presenter.implicitHydrogens = t
					}
				}), r.createElement(j, {
					labelString: "Ring Bond Count:",
					key: "Ring Bond Count",
					defaultValue: this.props.presenter.ringBondCount,
					optionStrings: this.props.presenter.ringBondCountOptionStrings,
					onChange: function(t) {
						return e.props.presenter.ringBondCount = t
					}
				}), r.createElement(j, {
					labelString: "Unsaturation:",
					key: "Unsaturation",
					defaultValue: this.props.presenter.unsaturation,
					optionStrings: this.props.presenter.unsaturationOptionStrings,
					onChange: function(t) {
						return e.props.presenter.unsaturation = t
					}
				}), r.createElement(j, {
					labelString: "Reaction Change:",
					key: "Reaction Change",
					defaultValue: this.props.presenter.rxnChange,
					optionStrings: this.props.presenter.reactionChangeOptionStrings,
					onChange: function(t) {
						return e.props.presenter.rxnChange = t
					}
				}), r.createElement(j, {
					labelString: "Reaction Stereo:",
					key: "Reaction Stereo",
					defaultValue: this.props.presenter.rxnStereo,
					optionStrings: this.props.presenter.reactionStereoOptionStrings,
					onChange: function(t) {
						return e.props.presenter.rxnStereo = t
					}
				}), r.createElement(j, {
					labelString: "Translation:",
					key: "Translation",
					defaultValue: this.props.presenter.translation,
					optionStrings: this.props.presenter.translationOptionStrings,
					onChange: function(t) {
						return e.props.presenter.translation = t
					}
				}), r.createElement(j, {
					labelString: "Isotopic Abundance:",
					key: "Isotopic Abundance",
					defaultValue: this.props.presenter.abundance,
					optionStrings: this.props.presenter.isotopicAbundanceOptionStrings,
					onChange: function(t) {
						return e.props.presenter.abundance = t
					}
				}), r.createElement(j, {
					labelString: "Abnormal Valence:",
					key: "Abnormal Valence",
					defaultValue: this.props.presenter.abValence,
					optionStrings: this.props.presenter.abnormalValenceOptionStrings,
					onChange: function(t) {
						return e.props.presenter.abValence = t
					}
				})), this.props.presenter.shouldShowEnhancedStereoProperty && r.createElement(j, {
					labelString: "Enhanced Stereochemistry:",
					defaultValue: this.props.presenter.enhancedStereo,
					optionStrings: this.props.presenter.enhancedStereochemistryOptionStrings,
					onChange: function(t) {
						return e.props.presenter.enhancedStereo = t
					}
				})), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onDefaults,
					bsClass: "cdd-button"
				},
				"Use Defaults"), r.createElement(f.b, {
					onClick: this.onSubmit,
					bsClass: "cdd-button-ok"
				},
				"OK"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		B = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		U = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return B(t, e),
			t.prototype.show = function() {
				var e = this.presenter,
				t = this.instanceHub.configurationManager.configuration.features.get(N.make("AtomPropertiesDialog.ShowGenericLabels"));
				void 0 === t && (t = !1);
				var n = r.createElement(F, {
					presenter: e,
					showGenericLabels: t,
					refresh: this.refresh
				});
				this.instanceHub.dialogContainerController.show(n)
			},
			t
		} (h),
		V = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		z = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onKeyDown = function(e) {
					e.keyCode === g.ENTER ? n.onSubmit() : e.keyCode === g.ESCAPE && n.onCancel()
				},
				n.onDefaults = function() {
					n.props.presenter.updateWithDefaults(),
					n.updateUI()
				},
				n.onSubmit = function() {
					n.props.presenter.applyBondProperties(),
					n.hide(),
					n.props.refresh()
				},
				n.onCancel = function() {
					n.hide(),
					n.props.refresh()
				},
				n
			}
			return V(t, e),
			t.prototype.renderContent = function() {
				var e = this;
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.onCancel,
					container: this,
					dialogClassName: "cdd-dialog-bond-properties",
					onKeyDown: this.onKeyDown
				},
				r.createElement(S, {
					className: "cdd-dialog-content"
				},
				r.createElement(j, {
					labelString: "Bond Type:",
					key: "Bond Type:",
					defaultValue: this.props.presenter.selectedBondTypeItemIndex,
					optionStrings: this.props.presenter.bondTypeItemDisplayNames,
					onChange: function(t) {
						return e.props.presenter.selectedBondTypeItemIndex = t
					}
				}), r.createElement(j, {
					labelString: "Topology:",
					key: "Topology:",
					defaultValue: this.props.presenter.selectedTopologyItemIndex,
					optionStrings: this.props.presenter.topologyItemDisplayNames,
					onChange: function(t) {
						return e.props.presenter.selectedTopologyItemIndex = t
					}
				}), r.createElement(j, {
					labelString: "Reaction Center:",
					key: "Reaction Center:",
					defaultValue: this.props.presenter.selectedReactionCenterItemIndex,
					optionStrings: this.props.presenter.reactionCenterItemDisplayNames,
					onChange: function(t) {
						return e.props.presenter.selectedReactionCenterItemIndex = t
					}
				})), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onDefaults,
					bsClass: "cdd-button"
				},
				"Use Defaults"), r.createElement(f.b, {
					onClick: this.onSubmit,
					bsClass: "cdd-button-ok"
				},
				"OK"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t.prototype.updateUI = function() {
				this.setState({})
			},
			t
		} (P),
		K = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		G = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return K(t, e),
			t.prototype.show = function() {
				var e = r.createElement(z, {
					presenter: this.presenter,
					refresh: this.refresh
				});
				this.instanceHub.dialogContainerController.show(e)
			},
			t
		} (h),
		X = function(e) {
			return r.createElement("div", null, r.createElement(f.f, {
				className: "cdd-dialog-table-row-header"
			},
			e.label), r.createElement(f.g, {
				className: "cdd-dialog-table-row-data",
				componentClass: e.componentClass || "input",
				defaultValue: e.defaultValue,
				ref: e.controlRef
			}), r.createElement(f.i, {
				className: "cdd-dialog-error-helpblock"
			},
			e.errorMessage || ""))
		},
		Y = function() {
			function e() {}
			return e.getException = function(e) {
				try {
					var t = a.getException(e);
					return {
						errorCode: t.errorCode,
						message: t.message
					}
				} catch(e) {
					return
				}
			},
			e
		} (),
		q = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		J = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.bindOrderInput = function(e) {
					var t = m.findDOMNode(e);
					t && (n.orderInput = t)
				},
				n.bindRepeatCountInput = function(e) {
					var t = m.findDOMNode(e);
					t && (n.repeatCountInput = t)
				},
				n.bindSruInput = function(e) {
					var t = m.findDOMNode(e);
					t && (n.sruInput = t)
				},
				n.bindOverrideRangeLabelInput = function(e) {
					var t = m.findDOMNode(e);
					t && (n.overrideRangeLabel = t)
				},
				n.bindOverrideLabelInput = function(e) {
					var t = m.findDOMNode(e);
					t && (n.overrideLabel = t)
				},
				n.onKeyDown = function(e) {
					e.keyCode === g.ENTER ? n.onSubmit() : e.keyCode === g.ESCAPE && n.onCancel()
				},
				n.updateUI = function() {
					n.setState({})
				},
				n.onUsageChanged = function(e) {
					n.props.presenter.selectedUsageIndex = e,
					n.updateUI()
				},
				n.onRepeatPatternChanged = function(e) {
					n.props.presenter.selectedRepeatPatternIndex = e,
					n.updateUI()
				},
				n.onFlipTypeChanged = function(e) {
					n.props.presenter.selectedFlipTypeIndex = e,
					n.updateUI()
				},
				n.onDefaults = function() {
					n.props.presenter.updateWithDefaults(),
					n.updateUI()
				},
				n.onCancel = function() {
					n.hide(),
					n.props.refresh()
				},
				n.onSubmit = function() {
					var e, t = n.props.presenter,
					o = !0;
					if (t.isOrderVisible) {
						"" === (e = n.orderInput.value) || i.isNumber(e) && parseInt(e, 10) >= 0 ? t.order = n.orderInput.value: o = !1
					}
					if (t.isRepeatCountVisible) { !
						function(e) {
							return !! i.isNumber(e) && parseInt(e, 10) >= 0
						} (n.repeatCountInput.value) ? o = !1 : t.repeatCount = n.repeatCountInput.value
					}
					if (t.isSRUVisible && (t.sru = n.sruInput.value), t.isOverrideRangeVisible) try {
						n.setState({
							overrideRangeLabelErrorMessage: ""
						}),
						t.molecularWeightOverrideRange = n.overrideRangeLabel.value
					} catch(e) { (r = Y.getException(e)) && n.setState({
							overrideRangeLabelErrorMessage: r.message
						}),
						o = !1
					}
					if (t.isOverrideVisible) try {
						n.setState({
							overrideLabelErrorMessage: ""
						}),
						t.molecularWeightOverride = n.overrideLabel.value
					} catch(e) {
						var r; (r = Y.getException(e)) && n.setState({
							overrideLabelErrorMessage: r.message
						}),
						o = !1
					}
					o && (t.applyBracketProperties(), n.hide(), n.props.refresh())
				},
				n
			}
			return q(t, e),
			t.prototype.componentDidUpdate = function(e, t) {
				var n = function(e) {
					setTimeout((function() {
						e.select(),
						e.focus()
					}), 0)
				},
				o = this.props.presenter;
				o.isOrderVisible ? n(this.orderInput) : o.isRepeatCountVisible ? n(this.repeatCountInput) : o.isSRUVisible ? n(this.sruInput) : o.isOverrideRangeVisible ? n(this.overrideRangeLabel) : o.isOverrideVisible && n(this.overrideLabel)
			},
			t.prototype.renderContent = function() {
				var e = this,
				t = this.props.presenter,
				n = {
					display: t.isOrderVisible ? "block": "none"
				},
				o = {
					display: t.isRepeatCountVisible ? "block": "none"
				},
				i = {
					display: t.isSRUVisible ? "block": "none"
				},
				a = {
					display: t.isOverrideVisible ? "block": "none"
				},
				s = {
					display: t.isOverrideRangeVisible ? "block": "none"
				};
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.onCancel,
					container: this,
					dialogClassName: "cdd-dialog-bracket-properties",
					onKeyDown: this.onKeyDown
				},
				r.createElement(S, {
					className: "cdd-dialog-content"
				},
				r.createElement(j, {
					labelString: "Bracket Usage:",
					key: "Bracket Usage:",
					onChange: function(t) {
						return e.onUsageChanged(t)
					},
					defaultValue: this.props.presenter.selectedUsageIndex,
					optionStrings: this.props.presenter.usageDisplayNames
				}), r.createElement("div", {
					className: "cdd-dialog-table-row",
					style: n
				},
				r.createElement(X, {
					label: "Order:",
					defaultValue: t.order,
					controlRef: this.bindOrderInput
				})), r.createElement("div", {
					className: "cdd-dialog-table-row",
					style: o
				},
				r.createElement(X, {
					label: "Repeat Count:",
					defaultValue: t.repeatCount,
					controlRef: this.bindRepeatCountInput
				})), r.createElement("div", {
					className: "cdd-dialog-table-row",
					style: i
				},
				r.createElement(X, {
					label: "SRU Label:",
					defaultValue: t.sru,
					controlRef: this.bindSruInput
				})), r.createElement("div", {
					className: "cdd-dialog-table-row",
					style: s
				},
				r.createElement(X, {
					label: "Label:",
					defaultValue: t.molecularWeightOverrideRange,
					errorMessage: this.state.overrideRangeLabelErrorMessage,
					controlRef: this.bindOverrideRangeLabelInput
				})), r.createElement("div", {
					className: "cdd-dialog-table-row",
					style: a
				},
				r.createElement(X, {
					label: "Mw or Mn:",
					defaultValue: t.molecularWeightOverride,
					errorMessage: this.state.overrideLabelErrorMessage,
					controlRef: this.bindOverrideLabelInput
				})), r.createElement(j, {
					labelString: "Repeat Pattern:",
					disabled: !this.props.presenter.isRepeatPatternEnabled,
					key: "Repeat Pattern:",
					onChange: function(t) {
						return e.onRepeatPatternChanged(t)
					},
					defaultValue: this.props.presenter.selectedRepeatPatternIndex,
					optionStrings: this.props.presenter.repeatPatternDisplayNames
				}), r.createElement(j, {
					labelString: "Flip Type:",
					disabled: !this.props.presenter.isFlipTypeEnabled,
					key: "Flip Type:",
					onChange: function(t) {
						return e.onFlipTypeChanged(t)
					},
					defaultValue: this.props.presenter.selectedFlipTypeIndex,
					optionStrings: this.props.presenter.flipTypeDisplayNames
				})), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onDefaults,
					bsClass: "cdd-button"
				},
				"Use Defaults"), r.createElement(f.b, {
					onClick: this.onSubmit,
					bsClass: "cdd-button-ok"
				},
				"OK"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		Z = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Q = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return Z(t, e),
			t.prototype.show = function() {
				var e = this.presenter,
				t = r.createElement(J, {
					presenter: e,
					refresh: this.refresh
				});
				this.instanceHub.dialogContainerController.show(t)
			},
			t
		} (h),
		$ = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ee = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.bindInput = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.textInput = t)
					}
				},
				n.focusAndSelectAll = function() {
					n.textInput && (n.textInput.focus(), n.textInput.select())
				},
				n.onKeyDown = function(e) {
					e.keyCode === g.ENTER && n.onSubmit()
				},
				n.onSubmit = function() {
					n.hide();
					var e = n.textInput.value;
					n.props.onSubmit(e)
				},
				n.onCancel = function() {
					n.hide(),
					n.props.onCancel()
				},
				n
			}
			return $(t, e),
			t.prototype.componentDidMount = function() {
				this.focusAndSelectAll()
			},
			t.prototype.componentDidUpdate = function() {
				this.focusAndSelectAll()
			},
			t.prototype.renderContent = function() {
				var e = this;
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.onCancel,
					container: this,
					dialogClassName: "cdd-dialog-contract",
					onKeyDown: this.onKeyDown
				},
				r.createElement(S, {
					className: "cdd-dialog-content cdd-align-left"
				},
				r.createElement("div", null, "Enter atom label to contract to:"), r.createElement(f.g, {
					className: "cdd-dialog-input",
					style: {
						width: "100%",
						padding: "5px",
						marginTop: "10px"
					},
					type: "text",
					defaultValue: this.props.label,
					ref: function(t) {
						e.bindInput(t)
					}
				})), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onSubmit,
					bsClass: "cdd-button-ok"
				},
				"OK"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		te = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ne = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return te(t, e),
			t.prototype.show = function() {
				var e = this,
				t = this.presenter,
				n = r.createElement(ee, {
					label: t.label,
					onSubmit: function(n) {
						t.label = n;
						try {
							t.contract()
						} catch(e) {
							console.warn(e)
						}
						e.done()
					},
					onCancel: function() {
						e.done()
					}
				},
				null);
				this.instanceHub.dialogContainerController.show(n)
			},
			t
		} (h),
		oe = n(406),
		re = function() {
			function e() {}
			return e.isNullOrWhiteSpace = function(e) {
				return void 0 === e || /^ *$/.test(e)
			},
			e.fromByteArray = function(t) {
				if ("string" == typeof t) return t;
				var n = t,
				o = e.toByteString(n);
				return oe.decode(o)
			},
			e.toUint8Array = function(e) {
				for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
				return n
			},
			e.toByteString = function(e) {
				for (var t = "",
				n = 0; n < e.length; n += 16384) {
					var o = e.slice(n, n + 16384);
					t += String.fromCharCode.apply(null, o)
				}
				return t
			},
			e
		} (),
		ie = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ae = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.bindInput = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.textInput = t)
					}
				},
				n.focusAndSelectAll = function() {
					n.textInput && (n.textInput.focus(), n.textInput.select())
				},
				n.onTextInputChanged = function() {
					n.setState({
						isSubmitDisabled: n.isSubmitDisabled()
					})
				},
				n.isSubmitDisabled = function() {
					return re.isNullOrWhiteSpace(n.textInput ? n.textInput.value: n.props.structureName)
				},
				n.onKeyDown = function(e) {
					e.keyCode === g.ENTER && (n.state.isSubmitDisabled || n.onSubmit())
				},
				n.onSubmit = function() {
					n.hide();
					var e = n.textInput.value,
					t = n.checkBox.checked;
					n.props.onSubmit(e, t)
				},
				n.onCancel = function() {
					n.hide(),
					n.props.onCancel()
				},
				n.state = Object.assign({},
				n.state, {
					isSubmitDisabled: n.isSubmitDisabled()
				}),
				n
			}
			return ie(t, e),
			t.prototype.componentDidMount = function() {
				this.focusAndSelectAll()
			},
			t.prototype.componentDidUpdate = function(e, t) { ! 1 === t.isShow && !0 === this.state.isShow && (this.focusAndSelectAll(), this.setState({
					isSubmitDisabled: this.isSubmitDisabled()
				}))
			},
			t.prototype.renderContent = function() {
				var e = this;
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.onCancel,
					container: this,
					dialogClassName: "cdd-dialog-name-to-structure",
					onKeyDown: this.onKeyDown
				},
				r.createElement(S, {
					className: "cdd-dialog-content cdd-align-left"
				},
				r.createElement("div", null, "Insert Structure whose name is:"), r.createElement(f.g, {
					className: "cdd-dialog-input",
					style: {
						width: "100%",
						padding: "5px",
						marginTop: "10px"
					},
					type: "text",
					defaultValue: this.props.structureName,
					onChange: this.onTextInputChanged,
					ref: function(t) {
						e.bindInput(t)
					}
				}), r.createElement(f.e, {
					inline: !0,
					className: "cdd-dialog-input",
					style: {
						marginTop: "5px"
					},
					inputRef: function(t) {
						e.checkBox = t
					},
					defaultChecked: this.props.pasteName
				},
				"Paste name below structure‎")), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onSubmit,
					bsClass: "cdd-button cdd-button-ok",
					disabled: this.state.isSubmitDisabled
				},
				"OK"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		se = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ce = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.presenter = t,
				n
			}
			return se(t, e),
			t.prototype.show = function() {
				var e = this,
				t = this.presenter,
				n = r.createElement(ae, {
					structureName: t.structureName,
					pasteName: t.pasteName,
					onSubmit: function(n, o) {
						t.structureName = n,
						t.pasteName = o;
						try {
							t.pasteNamedStructure()
						} catch(e) {
							console.warn(e)
						}
						e.done()
					},
					onCancel: function() {
						e.done()
					}
				},
				null);
				this.instanceHub.dialogContainerController.show(n)
			},
			t
		} (h),
		le = function() {
			function e(e) {
				this.presenter = e,
				this.instanceHub = c.getInstanceHub(this.presenter.getDocument());
				var t = this.instanceHub.textEditorController;
				this.editor = t.getTextEditor()
			}
			return e.prototype.show = function() {
				this.setContentsToEditor(),
				this.setColor(),
				this.updateSizeAndPosition(),
				this.showEditor(),
				this.setSelectionToEditor(),
				this.setEventListener(),
				this.setEditorBoundsToPresenter()
			},
			e.prototype.setColor = function() {
				var e, t = this.editor.container.style,
				n = this.presenter.getDocument();
				t.backgroundColor = "rgb(" + ((e = n.backgroundColor).red >> 8) + "," + (e.green >> 8) + "," + (e.blue >> 8) + ")"
			},
			e.prototype.updateSizeAndPosition = function() {
				var e = this.presenter,
				t = this.editor.container,
				n = t.style,
				o = (this.editor.quill, t.getElementsByClassName("ql-container")[0]);
				o.style.fontFamily = e.defaultFontFamily,
				o.style.fontSize = e.defaultFontSize * e.scale + "px",
				0 === e.lineHeight ? o.style.lineHeight = "initial": o.style.lineHeight = e.lineHeight * e.scale + "px";
				var r = e.textObjectBounds;
				n.top = r.top - 3 + "px",
				n.left = r.left - 3 + "px",
				n.minWidth = e.minWidth * e.scale + 6 + "px",
				n.maxWidth = e.maxWidth * e.scale + 6 + "px"
			},
			e.prototype.setEditorBoundsToPresenter = function() {
				var e = this.presenter,
				t = this.editor.container,
				n = e.textObjectBounds;
				n.top -= 3,
				n.left -= 3,
				n.right = n.left + t.offsetWidth,
				n.bottom = n.top + t.offsetHeight;
				n.top -= 1,
				n.left -= 1,
				n.right += 1,
				n.bottom += 1,
				e.editorBounds = n
			},
			e.prototype.setContentsToPresenter = function() {
				var e = this.presenter,
				t = this.editor.quill,
				n = t.getContents();
				if (n = JSON.parse(JSON.stringify(n)), this.scaleFontSizeInDelta(n, 1 / e.scale), n.ops) for (var o = 0,
				r = n.ops; o < r.length; o++) {
					var i = r[o].attributes;
					i && (i.font || (i.font = e.defaultFontFamily), i.size || (i.size = e.defaultFontSize + "px"))
				}
				var a = t.getSelection();
				a || (a = t.selection.savedRange),
				e.handleTextEdit(n, a)
			},
			e.prototype.setSelectionToPresenter = function() {
				var e = this.editor.quill.getSelection();
				e && this.presenter.handleSelectedRangeEdit(e)
			},
			e.prototype.setContentsToEditor = function() {
				var e = this.presenter.quillDelta;
				this.scaleFontSizeInDelta(e, this.presenter.scale),
				this.editor.quill.setContents(e)
			},
			e.prototype.setSelectionToEditor = function() {
				this.editor.quill.setSelection(this.presenter.selectedRange)
			},
			e.prototype.scaleFontSizeInDelta = function(e, t) {
				if (e.ops) for (var n = 0,
				o = e.ops; n < o.length; n++) {
					var r = o[n].attributes;
					r && this.scaleFontSizeInFormats(r, t)
				}
			},
			e.prototype.scaleFontSizeInFormats = function(e, t) {
				var n = e.size;
				if (n) {
					var o = /^([+-]?\d+(\.\d+)?)(.*)$/.exec(n);
					if (o) {
						var r = parseFloat(o[1]) * t + o[3];
						e.size = r
					}
				}
			},
			e.prototype.setTypingFormatToEditor = function() {
				var e = this.editor.quill;
				if (0 === e.getSelection().length) {
					var t = this.presenter.typingFormat;
					for (var n in this.scaleFontSizeInFormats(t, this.presenter.scale), t) t.hasOwnProperty(n) && e.format(n, t[n])
				}
			},
			e.prototype.setEventListener = function() {
				var e = this,
				t = this.presenter;
				this.editor.onKeyDown = function(n) {
					n.keyCode === g.ESCAPE ? e.commitChanges() : n.keyCode === g.ENTER && (t.shouldEndEditingOnNewline && !n.altKey ? e.commitChanges() : e.insertNewLine())
				},
				this.editor.onTextChange = function() {
					window.setTimeout((function() {
						e.setContentsToPresenter(),
						e.processChange()
					}), 0),
					e.setEditorBoundsToPresenter()
				},
				this.editor.onSelectionChange = function() {
					e.setSelectionToPresenter(),
					e.processChange()
				},
				this.editor.onUndo = function() {
					e.handleCommand("undo")
				},
				this.editor.onRedo = function() {
					e.handleCommand("redo")
				},
				this.editor.onShortcut = function(t) {
					switch (t) {
					case "subscript":
						e.handleCommand("textStyleSubscript");
						break;
					case "superscript":
						e.handleCommand("textStyleSuperscript");
						break;
					case "formula":
						e.handleCommand("textStyleFormula")
					}
				},
				this.editor.getTypingFormat = function() {
					return t.typingFormat
				},
				this.editor.onDismiss = function() {
					if (e.editor.container) {
						var n = e.editor.container.style;
						"none" !== n.display && (t.commit(), n.display = "none")
					}
				},
				this.editor.onUpdatePositionForDynamicPage = function() {
					e.updateSizeAndPosition()
				},
				t.addNotificationHandler("textChanged", (function() {
					e.setContentsToEditor(),
					e.setSelectionToEditor(),
					e.setTypingFormatToEditor(),
					e.updateSizeAndPosition()
				})),
				t.addNotificationHandler("selectedRangeChanged", (function() {
					e.setSelectionToEditor()
				})),
				t.addNotificationHandler("typingStyleChanged", (function() {
					e.setTypingFormatToEditor()
				})),
				t.addNotificationHandler("scaleChanged", (function() {
					e.setContentsToEditor(),
					e.setSelectionToEditor(),
					e.instanceHub.chemDraw.preservePageInfo && e.updateSizeAndPosition()
				})),
				t.addNotificationHandler("dismiss", (function() {
					e.processChange(),
					e.hideEditor()
				}))
			},
			e.prototype.handleCommand = function(e) {
				this.instanceHub.commandLibrary.getCommandWithName(e).execute()
			},
			e.prototype.processChange = function() {
				this.editor.container && this.instanceHub.chemDraw.processChange()
			},
			e.prototype.insertNewLine = function() {
				var e = this.editor.quill,
				t = e.getSelection();
				t.length > 0 && e.deleteText(t.index, t.length),
				e.insertText(t.index, "\n", "user"),
				e.setSelection(t.index + 1, 0)
			},
			e.prototype.commitChanges = function() {
				this.presenter.commit()
			},
			e.prototype.showEditor = function() {
				this.editor.container.style.display = "block"
			},
			e.prototype.hideEditor = function() {
				this.editor.container && (this.editor.container.style.display = "none", this.instanceHub.eventPanelController.setFocus());
				this.presenter.delete()
			},
			e
		} ();
		function ue(e, t) {
			var n = c.activeInstanceHub,
			o = n.chemistryService,
			r = n.progressIndicatorController;
			r.show(),
			o.nameToStructure(e).then((function(e) {
				r.hide(),
				t && (t.handleFulfilled(e), t.delete())
			})).
			catch((function(e) {
				r.hide(),
				t && (t.handleRejected(e.message), t.delete())
			}))
		}
		function pe(e, t) {
			c.activeInstanceHub.chemistryService.structureToName(e).then((function(e) {
				t && (t.handleFulfilled(e), t.delete())
			})).
			catch((function(e) {
				t && (t.handleRejected(e.message), t.delete())
			}))
		}
		Object(o.b)((function(e) {
			e.TextObjectEditor = le,
			e.Tooltip = b,
			e.AddChainDialog = M,
			e.ContractLabelDialog = ne,
			e.AtomPropertiesDialog = U,
			e.BondPropertiesDialog = G,
			e.BracketPropertiesDialog = Q,
			e.NameToStructureDialog = ce
		})),
		Object(o.b)((function(e) {
			e.callNameToStructureWebService = ue,
			e.callStructureToNameWebService = pe
		}));
		var de = n(182),
		he = !1;
		var fe, me = function() {
			this.viewOnly = !1,
			this.preservePageInfo = !1
		},
		ge = function() {
			function e(e) {
				this.instanceHub = e
			}
			return e.prototype.onChange = function(e) {
				this.instanceHub.chemDraw.selectionChangedHandlerCallback = function() {
					if (e) try {
						e()
					} catch(e) {
						console.error("Calling selection changed handler throws error:\n" + e)
					}
				}
			},
			e.prototype.isEmpty = function() {
				return a.SelectionAPI.isEmpty(this.instanceHub.chemDraw.cdDoc)
			},
			e.prototype.containsPartialStructure = function() {
				return a.SelectionAPI.containsPartialStructure(this.instanceHub.chemDraw.cdDoc)
			},
			e.prototype.numberOfStructures = function() {
				return a.SelectionAPI.numberOfStructures(this.instanceHub.chemDraw.cdDoc)
			},
			e.prototype.numberOfObjects = function() {
				return a.SelectionAPI.numberOfObjects(this.instanceHub.chemDraw.cdDoc)
			},
			e.prototype.getCDXML = function() {
				try {
					return a.SelectionAPI.getCDXML(this.instanceHub.chemDraw.cdDoc)
				} catch(t) {
					var e = Y.getException(t);
					throw new Error(e ? e.message: t)
				}
			},
			e.prototype.getImageUrl = function(e) {
				var t = Object.assign({},
				e);
				try {
					return "data:image/png;base64," + a.SelectionAPI.getPNG(this.instanceHub.chemDraw.cdDoc, t)
				} catch(e) {
					var n = Y.getException(e);
					throw new Error(n ? n.message: e)
				}
			},
			e.prototype.getSVG = function(e) {
				var t = Object.assign({},
				e);
				try {
					return a.SelectionAPI.getSVG(this.instanceHub.chemDraw.cdDoc, t)
				} catch(e) {
					var n = Y.getException(e);
					throw new Error(n ? n.message: e)
				}
			},
			e
		} (),
		be = function(e) {
			var t = this;
			this.steps = [],
			this.addStep = function(e) {
				t.steps.push(e)
			},
			this.execute = function() {
				return new Promise((function(e, n) {
					t.executeInternal(t.steps.slice(0), e, n)
				}))
			},
			this.executeInternal = function(e, n, o) {
				if (0 === e.length) n();
				else {
					var r = e.shift().execute();
					void 0 !== r ? r.then((function() {
						t.executeInternal(e, n, o)
					})).
					catch((function(e) {
						o(e)
					})) : t.executeInternal(e, n, o)
				}
			};
			for (var n = 0,
			o = e; n < o.length; n++) {
				var r = o[n];
				this.addStep(r)
			}
		},
		ye = n(60),
		Ce = {
			InstanceHub: Symbol("InstanceHub"),
			ChemDrawCoreWrapper: Symbol("ChemDrawCoreWrapper"),
			ToolLibrary: Symbol("ToolLibrary"),
			FileDropEventSource: Symbol("FileDropEventSource"),
			MouseEventSource: Symbol("MouseEventSource"),
			KeyEventSource: Symbol("KeyEventSource"),
			ClipboardManager: Symbol("ClipboardManager"),
			CommandLibrary: Symbol("CommandLibrary"),
			ProgressIndicatorController: Symbol("ProgressIndicatorController"),
			MessagePresenterController: Symbol("MessagePresenterController"),
			ClipboardIconController: Symbol("ClipboardIconController"),
			DialogContainerController: Symbol("DialogContainerController"),
			ChemistryService: Symbol("ChemistryService"),
			EventPanelController: Symbol("EventPanelController"),
			TextEditorController: Symbol("TextEditorController"),
			ToolbarController: Symbol("ToolbarController"),
			SetupWizard: Symbol("SetupWizard"),
			LicenseManager: Symbol("LicenseManager"),
			ConfigurationManager: Symbol("ConfigurationManager"),
			DocumentStyleManager: Symbol("DocumentStyleManager"),
			LicenseChecker: Symbol("LicenseChecker"),
			ConfigurationLoader: Symbol("ConfigurationLoader"),
			ChemDrawWebLoader: Symbol("ChemDrawWebLoader"),
			ClipboardConfigurator: Symbol("ClipboardConfigurator"),
			CoreConfigurator: Symbol("CoreConfigurator"),
			CDDConfigurator: Symbol("CDDConfigurator"),
			WebServiceConfigurator: Symbol("WebServiceConfigurator"),
			ApplicationLogoController: Symbol("ApplicationLogoController"),
			EventEmitter: Symbol("EventEmitter")
		},
		ve = function() {
			function e() {
				var t = this;
				this.get = function(e) {
					return t.storage.getItem(t.addPrefix(e))
				},
				this.set = function(e, n) {
					t.storage.setItem(t.addPrefix(e), n)
				},
				this.remove = function(e) {
					t.storage.removeItem(t.addPrefix(e))
				},
				this.removeAll = function(e) {
					for (var n = t.storage.length - 1; n >= 0; n--) {
						var o = t.storage.key(n);
						o.startsWith(t.addPrefix(e)) && t.storage.removeItem(o)
					}
				},
				this.addPrefix = function(t) {
					return e.PREFIX + t
				},
				this.storage = window.localStorage
			}
			return e.PREFIX = "cdd.",
			e
		} (),
		we = function() {
			var e = this;
			this.map = new Map,
			this.get = function(t) {
				return e.map.get(t)
			},
			this.set = function(t, n) {
				e.map.set(t, n)
			},
			this.remove = function(t) {
				e.map.delete(t)
			},
			this.removeAll = function(t) {
				e.map.forEach((function(n, o) {
					o.startsWith(t) && e.map.delete(o)
				}))
			}
		},
		Se = function(e, t) {
			var n = this;
			this.setString = function(e, t) {
				var o = n.getObject();
				o[e] = t,
				n.setObject(o)
			},
			this.setNumber = function(e, t) {
				var o = n.getObject();
				o[e] = t,
				n.setObject(o)
			},
			this.getString = function(e) {
				return n.getObject()[e]
			},
			this.getNumber = function(e) {
				return n.getObject()[e]
			},
			this.clear = function() {
				n.setObject({})
			},
			this.getObject = function() {
				var e, t = n.storage.get(n.storeKey);
				if (t && "" !== t) try {
					e = JSON.parse(t)
				} catch(e) {}
				return void 0 === e && (e = {}),
				e
			},
			this.setObject = function(e) {
				n.storage.set(n.storeKey, JSON.stringify(e))
			},
			this.storage = e,
			this.storeKey = t
		},
		Ee = function(e, t) {
			var n = this;
			this.map = new Map,
			this.setString = function(e, t) {
				n.map.set(e, t)
			},
			this.setNumber = function(e, t) {
				n.map.set(e, t)
			},
			this.getString = function(e) {
				return n.map.get(e)
			},
			this.getNumber = function(e) {
				return n.map.get(e)
			},
			this.clear = function() {
				n.map.clear()
			},
			this.setObject = function(e) {
				throw new Error("Method not implemented.")
			}
		},
		De = function() {
			function e() {}
			return e.createObjectStore = function(t) {
				return e.isLocalStorageSupported() ? new Se(new ve, t) : new Ee(new we, t)
			},
			e.isLocalStorageSupported = function() {
				return e.checkStorageSupport("localStorage")
			},
			e.checkStorageSupport = function(e) {
				var t = "_cdd_dummy_";
				try {
					return window[e].setItem(t, t),
					window[e].removeItem(t),
					!0
				} catch(e) {
					return ! 1
				}
			},
			e
		} (),
		Te = function() {
			function e() {}
			return e.prototype.createLocalStorage = function() {
				return De.isLocalStorageSupported() ? new ve: new we
			},
			e.prototype.LocalStorageFactory = function() {},
			e.INSTANCE = new e,
			e
		} (),
		_e = function() {
			function e() {}
			return e.create = function(e) {
				return r.createElement("div", null, r.createElement("div", null, "Loading ChemDraw Web Clipboard..."), r.createElement("div", {
					style: {
						fontSize: "small",
						fontStyle: "italic"
					}
				},
				"You can ", r.createElement("a", {
					style: {
						cursor: "pointer"
					},
					onClick: function() {
						e.hide()
					}
				},
				"hide"), " this and check the clipboard status icon later."))
			},
			e
		} (),
		Pe = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Oe = function() {
			return (Oe = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		Ae = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Pe(t, e),
			t.prototype.render = function() {
				var e = this.props.className;
				return e || (e = "cdd-dialog-title"),
				r.createElement(f.k.Header, Oe({},
				this.props, {
					className: e
				}))
			},
			t
		} (r.Component),
		xe = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Ie = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onAllow = function(e) {
					n.hideAllFirstDialog(),
					Kt.allowExtension(n.props.instanceHub, !0),
					e.stopPropagation()
				},
				n.onDeny = function(e) {
					n.hideAllFirstDialog(),
					Kt.allowExtension(n.props.instanceHub, !1),
					e.stopPropagation()
				},
				n.hideFirstTimeDialog = function() {
					window.removeEventListener("cdd_clipboard_first_dialog_state", n.hideFirstTimeDialog),
					n.hide()
				},
				n.hideAllFirstDialog = function() {
					var e = document.createEvent("CustomEvent");
					e.initCustomEvent("cdd_clipboard_first_dialog_state", !0, !1, null),
					window.dispatchEvent(e)
				},
				window.addEventListener("cdd_clipboard_first_dialog_state", n.hideFirstTimeDialog),
				n
			}
			return xe(t, e),
			t.prototype.renderContent = function() {
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: function() {},
					container: this
				},
				r.createElement(Ae, null, "Allow access to clipboard?"), r.createElement(S, null, "ChemDraw will load an extension to access your system's clipboard. This is needed to support extended copy and paste functionality from desktop ChemDraw. Do you want to allow this?"), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onAllow,
					bsClass: "cdd-button-ok"
				},
				"Allow"), r.createElement(f.b, {
					onClick: this.onDeny,
					bsClass: "cdd-button-danger"
				},
				"Deny")))
			},
			t
		} (P),
		He = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		}; !
		function(e) {
			e[e.INFO = 0] = "INFO",
			e[e.WARN = 1] = "WARN",
			e[e.ERROR = 2] = "ERROR"
		} (fe || (fe = {}));
		var Me, Re = function() {
			function e() {
				this.messageQueue = [],
				this.autoHideTimeout = 5e3,
				this.filterMessage = function(e) {
					return e
				}
			}
			return e.prototype.bind = function(e) {
				this.presenter = e
			},
			e.prototype.error = function(e) {
				this.pushMessage({
					level: fe.ERROR,
					message: e
				})
			},
			e.prototype.warn = function(e) {
				this.pushMessage({
					level: fe.WARN,
					message: e
				})
			},
			e.prototype.info = function(e) {
				this.pushMessage({
					level: fe.INFO,
					message: e
				})
			},
			e.prototype.showMessages = function(e) {
				this.pushMessage.apply(this, e)
			},
			e.prototype.hide = function() {
				this.doHide(),
				clearTimeout(this.timeHandler),
				this.timeHandler = void 0,
				this.showNextMessage()
			},
			e.prototype.pushMessage = function() {
				for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				t && t.length > 0 && ((e = this.messageQueue).push.apply(e, t), this.showNextMessage())
			},
			e.prototype.showNextMessage = function() {
				if (!this.timeHandler && this.messageQueue.length > 0) {
					var e = this.messageQueue.shift();
					"function" == typeof this.filterMessage && (e = this.filterMessage(e)),
					e ? (this.doShow(e), this.startAutoHide()) : this.showNextMessage()
				}
			},
			e.prototype.startAutoHide = function() {
				var e = this;
				this.timeHandler = setTimeout((function() {
					e.hide()
				}), this.autoHideTimeout)
			},
			e.prototype.doShow = function(e) {
				this.presenter && this.presenter.show(e.level, e.message)
			},
			e.prototype.doHide = function() {
				this.presenter && this.presenter.hide()
			},
			e = He([Object(de.injectable)()], e)
		} (),
		Le = function() {
			function e(e, t) {
				this.message = e,
				this.response = t
			}
			return Object.defineProperty(e.prototype, "status", {
				get: function() {
					return this.response ? this.response.status: 0
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "statusText", {
				get: function() {
					return this.response ? this.response.statusText: "Network Error"
				},
				enumerable: !0,
				configurable: !0
			}),
			e
		} (),
		Ne = new(function() {
			function e() {
				this.cache = new Map
			}
			return e.prototype.getWithCache = function(e) {
				var t = this;
				if (this.cache.has(e)) {
					var n = this.cache.get(e);
					return Promise.resolve(n)
				}
				return this.get(e).then((function(n) {
					return t.cache.set(e, n),
					n
				}))
			},
			e.prototype.get = function(e) {
				return this.fetch(e).then((function(e) {
					return e.text()
				}))
			},
			e.prototype.fetch = function(e, t) {
				return t = Object.assign({
					mode: "cors",
					credentials: "include"
				},
				t),
				fetch(e, t).
				catch((function(e) {
					throw new Le("Failed to load resource. Please check your network and service address.")
				})).then((function(e) {
					if (e.ok) return e;
					throw new Le("Failed to load resource (" + e.status + ": " + e.statusText + ").", e)
				}))
			},
			e
		} ()),
		ke = n(9),
		je = "The version of clipboard extension is too old. Please click the clipboard icon below to update it.",
		We = "The clipboard extension has a new version. You can click the clipboard icon below to update it.",
		Fe = "The clipboard native application has a new version. You can click the clipboard icon below to update it.",
		Be = "The version of clipboard native application is too old. Please click the clipboard icon below to update it.",
		Ue = "2",
		Ve = "After successful installation, the clipboard icon at the bottom left of the page will turn green.",
		ze = "To enable extended copy and paste functionality, follow these steps:",
		Ke = function() {
			function e() {}
			return e.prototype.getName = function() {
				return Object.getPrototypeOf(this).constructor.name
			},
			e.prototype.setIconState = function(e) {
				var t = document.createEvent("CustomEvent");
				t.initCustomEvent("cdd_clipboard_icon_state", !0, !1, e),
				window.dispatchEvent(t)
			},
			e.prototype.checkNativeAppVersion = function(e, t) {
				var n = O.a.parse(e);
				if (O.a.compareAsNumber(n.majorVersion, Ue) < 0) return new Promise((function(e, t) {
					t(Be)
				}));
				var o = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, t));
				return Ne.getWithCache(o).then((function(e) {
					return new Promise((function(t, o) {
						var r = O.a.parse(e);
						if (O.a.compareAsNumber(n.majorVersion, r.majorVersion) < 0) o(Be);
						else if (n.compareTo(r) < 0) {
							var i = fe.INFO;
							O.a.compareAsNumber(n.minorVersion, r.minorVersion) < 0 && (i = fe.WARN),
							t({
								level: i,
								message: Fe
							})
						} else t()
					}))
				})).
				catch((function(e) {
					return console.log("Failed to get version from server. Reason: " + e.statusText + "."),
					new Promise((function(e, t) {
						e()
					}))
				}))
			},
			e
		} (),
		Ge = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Xe = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ge(t, e),
			t.prototype.render = function() {
				var e = ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.exe");
				return r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				ze), r.createElement(S, null, r.createElement("ul", {
					className: "cdd-dialog-list"
				},
				r.createElement("li", null, "Download and run the latest version of ", r.createElement("a", {
					className: "cdd-link",
					href: e,
					target: "_blank"
				},
				"ChemDraw Web Clipboard"), "."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: "http://www.java.com/en/download/manual.jsp#win",
					target: "_blank"
				},
				"Click here"), " to install Java version 7 or later."), r.createElement("li", null, "After Java is installed, ", r.createElement("a", {
					className: "cdd-link",
					href: "javascript:window.location.reload();"
				},
				"refresh"), " this page."), r.createElement("li", null, "Allow your browser to accept Java plugin."), r.createElement("li", null, "Allow security warning.")), r.createElement("div", null, Ve)), r.createElement("hr", {
					className: "thin"
				}))
			},
			t
		} (r.Component),
		Ye = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		qe = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ye(t, e),
			t.prototype.render = function() {
				var e = "about:blank";
				return A.isWindows() ? e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.exe")) : A.isMac() && (e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.pkg"))),
				r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				ze), r.createElement(S, null, r.createElement("ul", {
					className: "cdd-dialog-list"
				},
				r.createElement("li", null, "Download and run ", r.createElement("a", {
					className: "cdd-link",
					href: e,
					target: "_blank"
				},
				"ChemDraw Web Clipboard"), "."), r.createElement("li", null, "Install extension from ", r.createElement("a", {
					className: "cdd-link",
					href: "https://chrome.google.com/webstore/detail/chemdraw-direct-clipboard/amdbbknpahfhdafplabjenapaacedach",
					target: "_blank"
				},
				"chrome web store"), "."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: "javascript:window.location.reload();"
				},
				"Refresh"), " this page.")), r.createElement("div", null, Ve)), r.createElement("hr", {
					className: "thin"
				}))
			},
			t
		} (r.Component),
		Je = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Ze = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Je(t, e),
			t.prototype.render = function() {
				return r.createElement(Ae, {
					closeButton: !0
				},
				"Extended copy and paste functionality is disabled")
			},
			t
		} (r.Component),
		Qe = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		$e = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Qe(t, e),
			t.prototype.render = function() {
				var e = "about:blank";
				A.isWindows() ? e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.exe")) : A.isMac() && (e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.pkg")));
				var t = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/firefox/chemdraw_web_clipboard.xpi"));
				return r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				ze), r.createElement(S, null, r.createElement("ul", {
					className: "cdd-dialog-list"
				},
				r.createElement("li", null, "Download and run ", r.createElement("a", {
					className: "cdd-link",
					href: e,
					target: "_blank"
				},
				"ChemDraw Web Clipboard"), "."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: t
				},
				"Click here"), " to install extension."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: "javascript:window.location.reload();"
				},
				"Refresh"), " this page.")), r.createElement("div", null, Ve)), r.createElement("hr", {
					className: "thin"
				}))
			},
			t
		} (r.Component),
		et = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		tt = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return et(t, e),
			t.prototype.render = function() {
				return r.createElement(Ae, {
					closeButton: !0
				},
				"Extended copy and paste functionality is activated")
			},
			t
		} (r.Component),
		nt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ot = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return nt(t, e),
			t.prototype.render = function() {
				var e = ".";
				return A.isEdge() ? e = " in Microsoft Edge.": A.isMobile() && (e = " in Mobile."),
				r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				"Extended copy and paste functionality is not supported" + e))
			},
			t
		} (r.Component),
		rt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		it = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return rt(t, e),
			t.prototype.render = function() {
				var e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/safari/ChemDraw Web Clipboard (Safari).dmg"));
				return r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				ze), r.createElement(S, null, r.createElement("ul", {
					className: "cdd-dialog-list"
				},
				r.createElement("li", null, "Download ", r.createElement("a", {
					className: "cdd-link",
					href: e,
					target: "_blank"
				},
				"ChemDraw Web Clipboard"), "."), r.createElement("li", null, "Run application ChemDraw Web Clipboard and follow instruction to enable Safari extension."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: "javascript:window.location.reload();"
				},
				"Refresh"), " this page.")), r.createElement("div", null, Ve)), r.createElement("hr", {
					className: "thin"
				}))
			},
			t
		} (r.Component),
		at = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		st = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return at(t, e),
			t.prototype.render = function() {
				var e = "";
				this.props.type === Me.ExtensionUpdated ? e = " extension": this.props.type === Me.NativeUpdated && (e = " application");
				var t = "To update ChemDraw Web Clipboard" + e + ", follow these steps:",
				n = "about:blank";
				A.isWindows() ? n = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.exe")) : A.isMac() && (n = A.isSafari() ? ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/safari/ChemDraw Web Clipboard (Safari).dmg")) : ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/installer/ChemDraw Web Clipboard.pkg")));
				var o = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/firefox/chemdraw_web_clipboard.xpi"));
				return r.createElement("div", null, r.createElement(Ae, {
					closeButton: !0
				},
				t), r.createElement(S, null, r.createElement("ul", {
					className: "cdd-dialog-list"
				},
				(this.props.type === Me.NativeUpdated || this.props.type === Me.BothUpdated) && r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: n,
					target: "_blank"
				},
				"Click here"), " to update ChemDraw Web Clipboard."), (this.props.type === Me.ExtensionUpdated || this.props.type === Me.BothUpdated) && r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: o
				},
				"Click here"), " to update extension."), r.createElement("li", null, r.createElement("a", {
					className: "cdd-link",
					href: "javascript:window.location.reload();"
				},
				"Refresh"), " this page."))), r.createElement("hr", {
					className: "thin"
				}))
			},
			t
		} (r.Component),
		ct = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (); !
		function(e) {
			e[e.NotSupport = 0] = "NotSupport",
			e[e.Installed = 1] = "Installed",
			e[e.ExtensionUpdated = 2] = "ExtensionUpdated",
			e[e.NativeUpdated = 3] = "NativeUpdated",
			e[e.BothUpdated = 4] = "BothUpdated",
			e[e.Denied = 5] = "Denied",
			e[e.Applet = 6] = "Applet",
			e[e.Chrome = 7] = "Chrome",
			e[e.Firefox = 8] = "Firefox",
			e[e.Safari = 9] = "Safari"
		} (Me || (Me = {}));
		var lt = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return ct(t, e),
			t.prototype.render = function() {
				var e;
				switch (this.props.type) {
				case Me.NotSupport:
					e = r.createElement(ot, null);
					break;
				case Me.Installed:
					e = r.createElement(tt, null);
					break;
				case Me.Denied:
					e = r.createElement(Ze, null);
					break;
				case Me.Applet:
					e = r.createElement(Xe, null);
					break;
				case Me.Chrome:
					e = r.createElement(qe, null);
					break;
				case Me.Firefox:
					e = r.createElement($e, null);
					break;
				case Me.Safari:
					e = r.createElement(it, null);
					break;
				case Me.NativeUpdated:
					e = r.createElement(st, {
						type: Me.NativeUpdated
					});
					break;
				case Me.ExtensionUpdated:
					e = r.createElement(st, {
						type: Me.ExtensionUpdated
					});
					break;
				case Me.BothUpdated:
					e = r.createElement(st, {
						type: Me.BothUpdated
					});
					break;
				default:
					e = void 0
				}
				return r.createElement("div", null, e)
			},
			t
		} (r.Component),
		ut = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		pt = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.onOK = function(e) {
					t.hide(),
					e.stopPropagation()
				},
				t
			}
			return ut(t, e),
			t.prototype.renderContent = function() {
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.hide,
					container: this,
					dialogClassName: "cdd-dialog-guide"
				},
				r.createElement(Ae, {
					className: "cdd-align-center"
				},
				"These actions are unavailable via the tool. Instead, use:"), r.createElement(S, null, r.createElement("div", {
					className: "cdd-dialog-guide-text-container cdd-dialog-guide-text-container-bold"
				},
				r.createElement("span", null, "Ctrl+C"), r.createElement("span", null, "Ctrl+X"), r.createElement("span", null, "Ctrl+V")), r.createElement("hr", null), r.createElement("div", {
					className: "cdd-dialog-guide-text-container"
				},
				r.createElement("span", null, "to copy"), r.createElement("span", null, "to cut"), r.createElement("span", null, "to paste"))), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onOK,
					bsClass: "cdd-button-cancel"
				},
				"OK")))
			},
			t
		} (P),
		dt = function() {
			function e() {}
			return e.generatePasteButtonGuide = function() {
				return r.createElement(pt, null)
			},
			e.generateClipboardFirstTimeChoice = function(e, t) {
				return r.createElement(Ie, {
					instanceHub: e,
					onClose: t
				})
			},
			e.generateInstallContents = function() {
				return r.createElement(lt, {
					type: Me.Installed
				})
			},
			e.generateUpdateContents = function(e) {
				return r.createElement(lt, {
					type: e
				})
			},
			e.generateAppletInstruction = function() {
				return r.createElement(lt, {
					type: Me.Applet
				})
			},
			e.generateSafariInstruction = function() {
				return r.createElement(lt, {
					type: Me.Safari
				})
			},
			e.generateChromeInstruction = function() {
				return r.createElement(lt, {
					type: Me.Chrome
				})
			},
			e.generateFirefoxInstruction = function() {
				return r.createElement(lt, {
					type: Me.Firefox
				})
			},
			e.generateClipboardInstructionContents = function() {
				return Kt.extendedClipboard ? Kt.extensionIsAllowed() ? Kt.extendedClipboard.getInstruction() : r.createElement(lt, {
					type: Me.Denied
				}) : r.createElement(lt, {
					type: Me.NotSupport
				})
			},
			e
		} (),
		ht = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		ft = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.isInstalled = !1,
				t.needsNativeUpdate = !1,
				t
			}
			return ht(t, e),
			t.prototype.enabled = function(e) {
				var t = this,
				n = function(e) {
					t.isInstalled = e,
					a.ClipboardServiceWeb.getSharedService().extendedClipboardTypesSupported = e,
					t.setIconState(e)
				};
				return new Promise((function(o, r) {
					var i = document.getElementById("cdd_system_clipboard_applet");
					if (e) if (t.isInstalled) t.setIconState(!0),
					o();
					else {
						i && i.parentElement.removeChild(i);
						var a = function() {
							document.removeEventListener("cdd-clipboard-applet-init", a),
							i.isNativeMessagingHostInstalled() ?
							function(e, n, o) {
								try {
									var r = JSON.parse(e.getNativeMessagingHostVersion());
									r.error ? o(r.error) : r.content ? t.checkNativeAppVersion(r.content, "clipboard/installer/version.txt").then((function(e) {
										var o = [];
										e && (t.needsNativeUpdate = !0, o.push(e)),
										n(o)
									})).
									catch((function(e) {
										o(e)
									})) : o("Could not determine version of installed native application")
								} catch(e) {
									o("Could not determine version of installed native application")
								}
							} (i, (function(e) {
								n(!0),
								o(e)
							}), (function(e) {
								n(!1),
								r(e)
							})) : (n(!1), r("ChemDraw Web Clipboard could not be found. Click the gray clipboard icon below to find out how to resolve this error."))
						};
						document.addEventListener("cdd-clipboard-applet-init", a);
						var s = function() {
							document.removeEventListener("cdd-clipboard-applet-destroy", s),
							n(!1),
							o()
						};
						document.addEventListener("cdd-clipboard-applet-destroy", s),
						(i = document.createElement("applet")).setAttribute("archive", ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/applet/cdd-clipboard.jar"))),
						i.setAttribute("code", "com.perkinelmer.clipboard.applet.ClipboardApplet.class"),
						i.setAttribute("name", "cdd_system_clipboard_applet"),
						i.setAttribute("id", "cdd_system_clipboard_applet"),
						i.setAttribute("java_status_events", "true"),
						i.style.position = "absolute",
						i.style.top = "-9999px",
						document.body.appendChild(i),
						i.onError = function() {
							n(!1),
							r("Click the gray clipboard icon below if you want to enable extended copy and paste functionality.")
						}
					} else e || (n(!1), i && i.parentElement.removeChild(i), o())
				}))
			},
			t.prototype.canPaste = function(e) {
				return this.isInstalled
			},
			t.prototype.canCopy = function(e) {
				return this.isInstalled
			},
			t.prototype.copy = function(e, t, n) {
				var o = {
					name: this.getName(),
					success: !1,
					error: "Can not access Clipboard."
				},
				r = document.getElementById("cdd_system_clipboard_applet").setData(JSON.stringify(t));
				try {
					var i = JSON.parse(r);
					i.error ? (o.success = !1, o.error = i.error) : o.success = !0
				} catch(e) {
					o.success = !1,
					o.error = "Parse response JSON error"
				}
				n(o)
			},
			t.prototype.paste = function(e, t, n) {
				var o = {
					name: this.getName(),
					success: !1,
					error: "Can not access Clipboard.",
					responseData: {}
				},
				r = document.getElementById("cdd_system_clipboard_applet").getBatchData(t.formats);
				try {
					var i = JSON.parse(r);
					if (i.error) o.success = !1,
					o.error = i.error;
					else {
						var a = i.content;
						if (a) {
							for (var s in i = JSON.parse(a)) i.hasOwnProperty(s) && (o.responseData[s] = i[s]);
							o.success = !0
						} else o.success = !1,
						o.error = "No available data can paste from Clipboard.";
						o.success = !0
					}
				} catch(e) {
					o.success = !1,
					o.error = "Parse response JSON error"
				}
				n(o)
			},
			t.prototype.getInstruction = function() {
				return this.needsNativeUpdate ? dt.generateUpdateContents(Me.NativeUpdated) : this.isInstalled ? dt.generateInstallContents() : dt.generateAppletInstruction()
			},
			t.prototype.checkExtensionVersion = function(e) {
				throw Error("Not Supported.")
			},
			t
		} (Ke),
		mt = n(233),
		gt = "Text",
		bt = "CDXML",
		yt = "ChemDraw Interchange Format",
		Ct = "EnhancedMetafile",
		vt = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		wt = function() {
			function e() {}
			return e.prototype.initialize = function(e) {
				this.eventEmitter = e.get(Ce.EventEmitter),
				this.chemDraw = e.get(Ce.ChemDrawCoreWrapper),
				this.commandLibrary = e.get(Ce.CommandLibrary),
				this.toolLibrary = e.get(Ce.ToolLibrary),
				this.fileDropEventSource = e.get(Ce.FileDropEventSource),
				this.mouseEventSource = e.get(Ce.MouseEventSource),
				this.keyEventSource = e.get(Ce.KeyEventSource),
				this.clipboardManager = e.get(Ce.ClipboardManager),
				this.progressIndicatorController = e.get(Ce.ProgressIndicatorController),
				this.messagePresenterController = e.get(Ce.MessagePresenterController),
				this.clipboardIconController = e.get(Ce.ClipboardIconController),
				this.dialogContainerController = e.get(Ce.DialogContainerController),
				this.chemistryService = e.get(Ce.ChemistryService),
				this.eventPanelController = e.get(Ce.EventPanelController),
				this.textEditorController = e.get(Ce.TextEditorController),
				this.toolbarContainerController = e.get(Ce.ToolbarController),
				this.applicationLogoController = e.get(Ce.ApplicationLogoController),
				this.setupWizard = e.get(Ce.SetupWizard),
				this.licenseManager = e.get(Ce.LicenseManager),
				this.configurationManager = e.get(Ce.ConfigurationManager),
				this.documentStyleManager = e.get(Ce.DocumentStyleManager),
				this.licenseChecker = e.get(Ce.LicenseChecker),
				this.configurationLoader = e.get(Ce.ConfigurationLoader),
				this.chemDrawWebLoader = e.get(Ce.ChemDrawWebLoader),
				this.coreConfigurator = e.get(Ce.CoreConfigurator),
				this.clipboardConfigurator = e.get(Ce.ClipboardConfigurator),
				this.cddConfigurator = e.get(Ce.CDDConfigurator),
				this.webServiceConfigurator = e.get(Ce.WebServiceConfigurator)
			},
			e.prototype.dispose = function() {
				c.activeInstanceHub === this && (c.activeInstanceHub = null),
				this.eventEmitter && this.eventEmitter.emit("dispose"),
				this.chemDraw && (this.chemDraw.cdDoc.delete(), this.chemDraw.trackingSession && this.chemDraw.trackingSession.delete()),
				this.chemDraw = null,
				this.commandLibrary = null,
				this.toolLibrary = null,
				this.mouseEventSource = null,
				this.keyEventSource = null,
				this.fileDropEventSource = null,
				this.clipboardManager = null,
				this.progressIndicatorController = null,
				this.messagePresenterController = null,
				this.clipboardIconController = null,
				this.dialogContainerController = null,
				this.chemistryService = null,
				this.eventPanelController = null,
				this.textEditorController = null,
				this.toolbarContainerController = null,
				this.setupWizard = null,
				this.licenseManager = null,
				this.configurationManager = null,
				this.documentStyleManager = null,
				this.licenseChecker = null,
				this.configurationLoader = null,
				this.chemDrawWebLoader = null,
				this.coreConfigurator = null,
				this.clipboardConfigurator = null,
				this.cddConfigurator = null,
				this.webServiceConfigurator = null,
				this.applicationLogoController = null,
				this.eventEmitter = null
			},
			e = vt([Object(de.injectable)()], e)
		} (),
		St = function() {
			function e() {
				this.featureEnabled = !0,
				this.hideTextAreaForClipboard = document.createElement("textarea"),
				this.hideTextAreaForClipboard.style.position = "fixed",
				this.hideTextAreaForClipboard.style.top = "50%",
				this.hideTextAreaForClipboard.style.opacity = "0",
				this.hideTextAreaForClipboard.style.zIndex = "0",
				this.hideTextAreaForClipboard.style.cursor = "inherit",
				this.hideTextAreaForClipboard.style.width = "0px",
				this.hideTextAreaForClipboard.style.height = "0px",
				this.hideTextAreaForClipboard.textContent = "Hide Text Area For Clipboard"
			}
			return e.prototype.registerOnElement = function(e) {
				e.appendChild(this.hideTextAreaForClipboard)
			},
			e.prototype.addTextCopyListener = function(e) {
				this.hideTextAreaForClipboard.addEventListener("copy", e),
				this.hideTextAreaForClipboard.addEventListener("cut", e)
			},
			e.prototype.addPasteListener = function(e) {
				this.hideTextAreaForClipboard.addEventListener("paste", e)
			},
			e.prototype.setActive = function() {
				this.hideTextAreaForClipboard.focus(),
				this.hideTextAreaForClipboard.setSelectionRange(0, 1)
			},
			e.prototype.copyResultCallback = function(e, t) {
				return function(n) {
					n.success ? e() : t({
						message: n.error
					})
				}
			},
			e.prototype.textCopy = function(e, t) {
				var n = this;
				return new Promise((function(o, r) {
					Kt.textClipboard.canCopy(t) ? Kt.textClipboard.copy(t, e, n.copyResultCallback(o, r)) : r({
						message: "No Clipboard can handle Copy action."
					}),
					t.preventDefault()
				}))
			},
			e.prototype.extendedCopy = function(e) {
				var t = this;
				return new Promise((function(n, o) {
					var r;
					Kt.extendedClipboard && Kt.extendedClipboard.canCopy(void 0) && (r = Kt.extendedClipboard),
					r ? r.copy(void 0, e, t.copyResultCallback(n, o)) : n()
				}))
			},
			e.prototype.paste = function(e, t) {
				var n = this;
				return new Promise((function(o, r) {
					var i = [];
					i.push(n.promisePaste(Kt.textClipboard, e, t)),
					n.canExecuteExtension() && i.push(n.promisePaste(Kt.extendedClipboard, e, t)),
					Promise.all(i).then((function(e) {
						var t = e[0],
						n = e[1];
						t.isAvailable && n && n.isAvailable ? 0 !== Object.keys(n.responseData).length ? o({
							message: n.message,
							responseData: Object.assign({},
							t.responseData, n.responseData)
						}) : 0 !== Object.keys(t.responseData).length ? o({
							message: n.message + " Text is pasted instead.",
							responseData: Object.assign({},
							t.responseData, n.responseData)
						}) : n.message ? r({
							message: n.message
						}) : t.message ? r({
							message: t.message
						}) : o({
							responseData: {}
						}) : t.isAvailable ? 0 !== Object.keys(t.responseData).length ? o({
							responseData: t.responseData
						}) : t.message ? r({
							message: t.message
						}) : o({
							responseData: {}
						}) : n && n.isAvailable ? 0 !== Object.keys(n.responseData).length ? o({
							responseData: n.responseData
						}) : n.message ? r({
							message: n.message
						}) : o({
							responseData: {}
						}) : r({
							guide: dt.generatePasteButtonGuide()
						})
					})),
					t && t.preventDefault()
				}))
			},
			e.prototype.canExecuteExtension = function() {
				return this.featureEnabled && Kt.extendedClipboard && Kt.extendedClipboard.canCopy(void 0) && Kt.extendedClipboard.canPaste(void 0)
			},
			e.prototype.enableFeature = function(e) {
				this.featureEnabled = e
			},
			e.prototype.promisePaste = function(e, t, n) {
				return new Promise((function(o) {
					e && e.canPaste(n) ? e.paste(n, t, (function(e) {
						o({
							message: e.success ? void 0 : e.error,
							responseData: e.responseData,
							isAvailable: !0
						})
					})) : o({
						isAvailable: !1,
						responseData: {}
					})
				}))
			},
			e
		} (),
		Et = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Dt = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Tt = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		_t = function() {
			function e(e) {
				var t = this;
				this.callback = null,
				this.handlePasteResponseData = function(e) {
					var n = a.ClipboardServiceWeb.getSharedService();
					for (var o in n.clear(), e) if (e.hasOwnProperty(o)) {
						var r = e[o];
						switch (o) {
						case gt:
							new RegExp("<cdxml[\\s\\S]*</cdxml>", "gim").test(r) ? n.setTextDataForType(r, a.ClipboardDataType.ChemicalCDXML) : n.setTextDataForType(r, a.ClipboardDataType.TextPlain);
							break;
						case bt:
							n.setTextDataForType(r, a.ClipboardDataType.ChemicalCDXML);
							break;
						default:
							var i = At(o);
							if (i) {
								var s = mt.toByteArray(r);
								n.setBinaryDataForType(s, i)
							}
						}
					}
					var c = a.AlertDisplayService.getSharedService().preventAlert;
					a.AlertDisplayService.getSharedService().preventAlert = !t.instanceHub.chemDraw.preservePageInfo;
					var l = a.getCommandIDForName("paste"),
					u = a.handleCommand(l, t.instanceHub.chemDraw.cdDoc);
					a.AlertDisplayService.getSharedService().preventAlert = c,
					console.assert(0 === u, "handleCommand result: " + u),
					t.instanceHub.chemDraw.processChange()
				},
				this.instanceHub = e,
				this.clipboardEventSource = new St,
				this.clipboardEventSource.addTextCopyListener((function(e) {
					t.clipboardEvent = e;
					var n = t.instanceHub.chemDraw.handleCommand(e.type);
					console.assert(0 === n, "handleCommand result: " + n),
					t.instanceHub.chemDraw.processChange()
				})),
				this.clipboardEventSource.addPasteListener((function(e) {
					t.executePaste(e)
				}))
			}
			return e.prototype.setClipboardActive = function() {
				this.clipboardEventSource.setActive()
			},
			e.prototype.setCallback = function(e) {
				this.callback = e
			},
			e.prototype.executeTextCopy = function(e) {
				this.instanceHub.progressIndicatorController.show();
				var t = this.clipboardEventSource.textCopy(e, this.clipboardEvent);
				this.finalizePromise(t)
			},
			e.prototype.executeExtendedCopy = function(e) {
				var t = this;
				this.clipboardEventSource.canExecuteExtension() && (this.instanceHub.progressIndicatorController.show(), this.finalizePromise(this.getMoreFormatsFromService(e).
				catch((function(n) {
					if (t.instanceHub.messagePresenterController) {
						t.instanceHub.messagePresenterController.error("Some image formats were not copied because there was an error connecting to the ChemDraw Web Service")
					}
					return e
				})).then((function(e) {
					return t.clipboardEventSource.extendedCopy(e)
				}))))
			},
			e.prototype.executePaste = function(e) {
				this.instanceHub.progressIndicatorController.show();
				var t = this.clipboardEventSource.paste({
					formats: [gt, bt, yt, "MDLCT", "MDLSK", "SMILES"]
				},
				e);
				this.finalizePromise(t)
			},
			e.prototype.finalizePromise = function(e) {
				var t = this;
				e.then((function(e) {
					e && (e.responseData && Object.keys(e.responseData).length > 0 && t.handlePasteResponseData(e.responseData), e.message && t.instanceHub.messagePresenterController && t.instanceHub.messagePresenterController.warn(e.message)),
					t.instanceHub.progressIndicatorController.hide(),
					t.callback && (t.callback(), t.callback = null)
				})).
				catch((function(e) {
					t.instanceHub.progressIndicatorController.hide(),
					e.message && t.instanceHub.messagePresenterController && t.instanceHub.messagePresenterController.error(e.message),
					t.instanceHub.dialogContainerController && t.instanceHub.dialogContainerController.show(e.guide)
				}))
			},
			e.prototype.getMoreFormatsFromService = function(e) {
				if (!this.instanceHub.chemistryService.isEnabled) return Promise.resolve(e);
				var t = e[bt],
				n = [];
				return A.isWindows() ? n = [Ct] : A.isMac() && (n = ["EPS"]),
				this.instanceHub.chemistryService.getClipboardData(t, n).then((function(t) {
					return A.isWindows() ? (e[Ct] = t[Ct], delete e.PNG) : A.isMac() && (e["EPS=>PDF"] = t.EPS),
					e
				}))
			},
			e = Et([Object(de.injectable)(), Tt(0, Object(de.inject)(Ce.InstanceHub)), Dt("design:paramtypes", [wt])], e)
		} (),
		Pt = [yt, "MDLCT", "MDLSK", "SMILES", "SLNSTRING", "PNG"],
		Ot = [a.ClipboardDataType.ChemicalCDX, a.ClipboardDataType.ChemicalMOL, a.ClipboardDataType.ChemicalSketch, a.ClipboardDataType.ChemicalSMILES, a.ClipboardDataType.ChemicalSLN, a.ClipboardDataType.ImagePNG];
		function At(e) {
			return Ot[Pt.indexOf(e)]
		}
		var xt, It, Ht, Mt, Rt, Lt, Nt = a.ClipboardServiceWeb.extend("ClipboardServiceWeb", {
			transferDataForTypes: function(e) {
				var t = {},
				n = {};
				e.forEach((function(e) {
					switch (e) {
					case a.ClipboardDataType.ChemicalCDXML:
						var o = a.ClipboardServiceWeb.getSharedService().getTextDataForType(e);
						o && (t[gt] = o, n[bt] = o);
						break;
					default:
						var r = function(e) {
							return Pt[Ot.indexOf(e)]
						} (e),
						i = a.ClipboardServiceWeb.getSharedService().getBinaryDataForType(e);
						if (r && i) {
							var s = mt.fromByteArray(i);
							n[r] = s
						}
					}
				})),
				_t.currentInstance && (_t.currentInstance.executeTextCopy(t), _t.currentInstance.executeExtendedCopy(n))
			}
		}),
		kt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		jt = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.isInstalled = !1,
				t.needsNativeUpdate = !1,
				t.nativeAppVersionUrl = "clipboard/installer/version.txt",
				t.EXTENSION_WAIT_TIME = 500,
				t
			}
			return kt(t, e),
			t.prototype.enabled = function(e) {
				var t = this,
				n = function() {
					t.isInstalled = !1,
					a.ClipboardServiceWeb.getSharedService().extendedClipboardTypesSupported = !1,
					t.setIconState(!1)
				};
				return new Promise((function(o, r) {
					if (t.needsNativeUpdate = !1, e) {
						var i = setTimeout((function() {
							n(),
							r("Click the gray clipboard icon below if you want to enable extended copy and paste functionality.")
						}), t.EXTENSION_WAIT_TIME);
						t.checkExtension((function(e) {
							clearTimeout(i),
							t.checkExtensionVersion(e.content).then((function(e) {
								var i = [];
								e && i.push(e),
								t.clipboardRequest({
									method: "getVersion"
								},
								(function(e) {
									e.error ? (n(), r("Click the gray clipboard icon below if you want to enable extended copy and paste functionality.")) : t.checkNativeAppVersion(e.content, t.nativeAppVersionUrl).then((function(e) {
										t.isInstalled = !0,
										a.ClipboardServiceWeb.getSharedService().extendedClipboardTypesSupported = !0,
										t.setIconState(!0),
										e && (t.needsNativeUpdate = !0, i.push(e)),
										o(i)
									})).
									catch((function(e) {
										n(),
										r(e)
									}))
								}))
							})).
							catch((function(e) {
								n(),
								r(e)
							}))
						}))
					} else n(),
					o()
				}))
			},
			t.prototype.canPaste = function(e) {
				return this.isInstalled
			},
			t.prototype.canCopy = function(e) {
				return this.isInstalled
			},
			t.prototype.copy = function(e, t, n) {
				var o = this;
				if (function(e) {
					return !! Object.keys(e).length
				} (t)) {
					var r = {
						method: "set",
						data: t
					};
					this.clipboardRequest(r, (function(e) {
						n({
							name: o.getName(),
							success: !!e.content,
							error: e.error
						})
					}))
				} else n({
					name: this.getName(),
					success: !0,
					error: void 0
				})
			},
			t.prototype.paste = function(e, t, n) {
				var o = this,
				r = {
					method: "getBatch",
					formats: t.formats
				};
				this.clipboardRequest(r, (function(e) {
					var t = {
						name: o.getName(),
						success: !1,
						error: "Can not access Clipboard.",
						responseData: {}
					};
					if (e.content) {
						var r = void 0;
						try {
							r = JSON.parse(e.content)
						} catch(e) {}
						if (r) {
							for (var i in r) r.hasOwnProperty(i) && (t.responseData[i] = r[i]);
							t.success = !0
						} else t.success = !1,
						t.error = "No available data can paste from Clipboard."
					} else t.success = !1,
					e.error ? t.error = e.error: t.error = "No available data can paste from Clipboard.";
					n(t)
				}))
			},
			t.prototype.clipboardRequest = function(e, t) {
				var n = function(e) {
					window.removeEventListener("cdd_clipboard_response", n),
					t && t.call(window, e.detail)
				};
				window.addEventListener("cdd_clipboard_response", n);
				var o = document.createEvent("CustomEvent");
				o.initCustomEvent("cdd_clipboard_request", !0, !1, e),
				window.dispatchEvent(o)
			},
			t.prototype.checkExtension = function(e) {
				var t = function(n) {
					window.removeEventListener("cdd_clipboard_extension_response", t),
					e && e.call(window, n.detail)
				};
				window.addEventListener("cdd_clipboard_extension_response", t);
				var n = document.createEvent("CustomEvent");
				n.initCustomEvent("cdd_clipboard_extension_request", !0, !1, {
					method: "getVersion"
				}),
				window.dispatchEvent(n),
				setTimeout((function() {
					window.removeEventListener("cdd_clipboard_extension_response", t)
				}), this.EXTENSION_WAIT_TIME)
			},
			t.prototype.getInstruction = function() {
				return this.needsNativeUpdate ? dt.generateUpdateContents(Me.NativeUpdated) : this.isInstalled ? dt.generateInstallContents() : dt.generateChromeInstruction()
			},
			t.prototype.checkExtensionVersion = function(e) {
				return new Promise((function(e, t) {
					e()
				}))
			},
			t
		} (Ke),
		Wt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Ft = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.needsExtensionUpdate = !1,
				t
			}
			return Wt(t, e),
			t.prototype.getInstruction = function() {
				return this.needsExtensionUpdate && this.needsNativeUpdate ? dt.generateUpdateContents(Me.BothUpdated) : this.needsExtensionUpdate ? dt.generateUpdateContents(Me.ExtensionUpdated) : this.needsNativeUpdate ? dt.generateUpdateContents(Me.NativeUpdated) : this.isInstalled ? dt.generateInstallContents() : dt.generateFirefoxInstruction()
			},
			t.prototype.checkExtensionVersion = function(e) {
				var t = this;
				this.needsExtensionUpdate = !1;
				var n = O.a.parse(e);
				if (O.a.compareAsNumber(n.majorVersion, Ue) < 0) return new Promise((function(e, t) {
					t(je)
				}));
				var o = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "clipboard/firefox/version.txt"));
				return Ne.getWithCache(o).then((function(e) {
					return new Promise((function(o, r) {
						var i = O.a.parse(e);
						if (O.a.compareAsNumber(n.majorVersion, i.majorVersion) < 0) t.needsExtensionUpdate = !0,
						r(je);
						else if (n.compareTo(i) < 0) {
							t.needsExtensionUpdate = !0;
							var a = fe.INFO;
							O.a.compareAsNumber(n.minorVersion, i.minorVersion) < 0 && (a = fe.WARN),
							o({
								level: a,
								message: We
							})
						} else o()
					}))
				})).
				catch((function(e) {
					return console.log("Failed to get version from server. Reason: " + e.statusText + "."),
					new Promise((function(e, t) {
						e()
					}))
				}))
			},
			t
		} (jt),
		Bt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Ut = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.nativeAppVersionUrl = "clipboard/safari/version.txt",
				t
			}
			return Bt(t, e),
			t.prototype.getInstruction = function() {
				return this.needsNativeUpdate ? dt.generateUpdateContents(Me.NativeUpdated) : this.isInstalled ? dt.generateInstallContents() : dt.generateSafariInstruction()
			},
			t
		} (jt),
		Vt = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		zt = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Vt(t, e),
			t.prototype.enabled = function(e) {
				throw new Error("Not Supported.")
			},
			t.prototype.canPaste = function(e) {
				try {
					return this.canCopy(e)
				} catch(e) {
					return ! 1
				}
			},
			t.prototype.canCopy = function(e) {
				try {
					var t = e ? e.clipboardData: void 0;
					return void 0 === t && (t = window.clipboardData),
					!!t
				} catch(e) {
					throw new Error("The action can not be completed in short time, please try again.")
				}
			},
			t.prototype.copy = function(e, t, n) {
				var o = {
					name: this.getName(),
					success: !1,
					error: void 0
				},
				r = e ? e.clipboardData: void 0;
				if (void 0 === r && (r = window.clipboardData), r) {
					var i = t[gt];
					i ? (r.setData(gt, i), o.success = !0) : o.success = !1
				}
				n(o)
			},
			t.prototype.paste = function(e, t, n) {
				var o = {
					name: this.getName(),
					success: !1,
					error: void 0,
					responseData: {}
				};
				try {
					var r = e ? e.clipboardData: void 0;
					if (void 0 === r && (r = window.clipboardData), r) {
						var i = r.getData("text");
						i ? (o.responseData[gt] = i, o.success = !0) : o.success = !1
					}
				} catch(e) {
					o.success = !1,
					o.error = e.message
				}
				n(o)
			},
			t.prototype.getInstruction = function() {
				throw new Error("Not Supported.")
			},
			t.prototype.checkExtensionVersion = function(e) {
				throw Error("Not Supported.")
			},
			t
		} (Ke),
		Kt = new(function() {
			function e() {
				if (this.textClipboard = new zt, this.clipboardLocalStorage = Te.INSTANCE.createLocalStorage(), A.isWindows() || A.isMac()) if (A.isChrome()) this.extendedClipboard = new jt;
				else if (A.isFirefox()) {
					var e = A.getFirefoxVersion();
					e && e.greaterThanOrEqualTo(O.a.parse("50")) && (this.extendedClipboard = new Ft)
				} else A.isSafari() ? this.extendedClipboard = new Ut: A.isIE() && (this.extendedClipboard = new ft)
			}
			return e.prototype.doFirstTime = function(e, t) {
				if (this.canExecuteExtension(e)) {
					var n = this.getClipboardPermission();
					if ("yes" === n) this.enableExtension(e, !0);
					else {
						if ("no" !== n) return void e.dialogContainerController.show(dt.generateClipboardFirstTimeChoice(e, t));
						this.extendedClipboard.enabled(!1).
						catch((function() {}))
					}
				}
				t && t()
			},
			e.prototype.getClipboardPermission = function() {
				return this.clipboardLocalStorage.get(e.STORE_NAME)
			},
			e.prototype.registerClipboardStorageChangedListener = function(t) {
				var n = this;
				if (this.canExecuteExtension(t)) {
					var o = function(o) {
						o.key && o.key.includes(e.STORE_NAME) && o.newValue !== o.oldValue && (n.canExecuteExtension(t) && n.enableExtension(t, "yes" === o.newValue), t.chemDraw && t.dialogContainerController && !t.chemDraw.isClipboardFirstLoadDone && t.dialogContainerController.isDialogType(Ie) && t.dialogContainerController.hide())
					};
					window.addEventListener("storage", o),
					t.eventEmitter.on("dispose", (function() {
						window.removeEventListener("storage", o)
					}))
				}
			},
			e.prototype.extensionIsAllowed = function() {
				return "yes" === this.getClipboardPermission()
			},
			e.prototype.allowExtension = function(t, n) {
				this.clipboardLocalStorage.set(e.STORE_NAME, n ? "yes": "no"),
				this.canExecuteExtension(t) && this.enableExtension(t, n)
			},
			e.prototype.enableExtension = function(e, t) {
				var n = this;
				this.canExecuteExtension(e) && (t && this.extendedClipboard instanceof ft && e.progressIndicatorController.show(_e.create(e.progressIndicatorController)), setTimeout((function() {
					n.extendedClipboard.enabled(t).then((function(t) {
						e.progressIndicatorController && e.progressIndicatorController.hide(),
						t && e.messagePresenterController && e.messagePresenterController.showMessages(t)
					})).
					catch((function(t) {
						e.progressIndicatorController && e.progressIndicatorController.hide(),
						t && e.messagePresenterController && e.messagePresenterController.error(t)
					}))
				}), 0))
			},
			e.prototype.canExecuteExtension = function(e) {
				return this.extendedClipboard && e.clipboardManager.clipboardEventSource.featureEnabled
			},
			e.STORE_NAME = "clipboard.permission",
			e
		} ()),
		Gt = n(34),
		Xt = function() {
			function e(e, t, n, o) {
				this.left = e,
				this.top = t,
				this.right = n,
				this.bottom = o
			}
			return e.isIntersecting = function(e, t) {
				return ! (t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top)
			},
			e.intersection = function(t, n) {
				var o = Math.max(t.left, n.left),
				r = Math.max(t.top, n.top);
				return new e(o, r, Math.max(Math.min(t.right, n.right), o), Math.max(Math.min(t.bottom, n.bottom), r))
			},
			e.union = function(t, n) {
				return new e(Math.min(t.left, n.left), Math.min(t.top, n.top), Math.max(t.right, n.right), Math.max(t.bottom, n.bottom))
			},
			e.empty = function() {
				return new e(0, 0, 0, 0)
			},
			Object.defineProperty(e.prototype, "isEmpty", {
				get: function() {
					return this.left === this.right || this.top === this.bottom
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "width", {
				get: function() {
					return this.right - this.left
				},
				set: function(e) {
					this.right = this.left + e
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "height", {
				get: function() {
					return this.bottom - this.top
				},
				set: function(e) {
					this.bottom = this.top + e
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.isIntersecting = function(t) {
				return e.isIntersecting(this, t)
			},
			e.prototype.grow = function(e) {
				return this.left -= e,
				this.top -= e,
				this.right += e,
				this.bottom += e,
				this
			},
			e.prototype.equals = function(e) {
				return this.left === e.left && this.right === e.right && this.top === e.top && this.bottom === e.bottom
			},
			e.prototype.toString = function() {
				return "(x,y){" + this.left + ", " + this.top + "}, (w,h)[" + this.width + ", " + this.height + "]"
			},
			e
		} (),
		Yt = function(e, t, n) {
			this.command = "",
			this.type = "button",
			this.name = e,
			this.displayName = t,
			this.reason = n
		},
		qt = n(178),
		Jt = "theme",
		Zt = "name",
		Qt = "url",
		$t = "layout",
		en = "features",
		tn = "properties",
		nn = "authentication",
		on = "enabled",
		rn = "disabled",
		an = "tools",
		sn = "category",
		cn = "group",
		ln = "order",
		un = "collapse",
		pn = "columns",
		dn = "writingMode",
		hn = "orientation",
		fn = "DEFAULT",
		mn = "type",
		gn = "oauth",
		bn = "url",
		yn = "grant_type",
		Cn = "chemservice",
		vn = "StyleSheet",
		wn = ["scienceaccelerated.com", "perkinelmer.cloud", "perkinelmer.com"]; !
		function(e) {
			e[e.Horizontal = 0] = "Horizontal",
			e[e.Vertical = 1] = "Vertical",
			e[e.Mixed = 2] = "Mixed"
		} (xt || (xt = {})),
		function(e) {
			e[e.DEFAULT = 0] = "DEFAULT",
			e[e.GENERAL = 1] = "GENERAL",
			e[e.DRAWING = 2] = "DRAWING"
		} (It || (It = {})),
		function(e) {
			e[e.Default = 0] = "Default",
			e[e.Categorized = 1] = "Categorized"
		} (Ht || (Ht = {})),
		function(e) {
			e[e.Auto = 0] = "Auto",
			e[e.Always = 1] = "Always",
			e[e.Never = 2] = "Never"
		} (Mt || (Mt = {})),
		function(e) {
			e[e.Horizontal = 0] = "Horizontal",
			e[e.Vertical = 1] = "Vertical"
		} (Rt || (Rt = {})),
		function(e) {
			e[e.Basic = 0] = "Basic",
			e[e.OAuth = 1] = "OAuth"
		} (Lt || (Lt = {}));
		var Sn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		En = function() {
			return (En = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		Dn = function(e, t) {
			var n = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
			}
			return n
		},
		Tn = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.bindButton = function(e) {
					if (null !== e) {
						var n = m.findDOMNode(e);
						n && (t.buttonHTMLElement = n)
					}
				},
				t
			}
			return Sn(t, e),
			t.prototype.getElement = function() {
				return this.buttonHTMLElement
			},
			t.prototype.render = function() {
				var e = this,
				t = this.props,
				n = t.id,
				o = t.className,
				i = t.children,
				a = t.iconClass,
				s = Dn(t, ["id", "className", "children", "iconClass"]);
				return r.createElement(f.b, En({
					id: n,
					className: o
				},
				s, {
					ref: function(t) {
						e.bindButton(t)
					}
				}), r.createElement("div", {
					className: a
				}), i)
			},
			t
		} (r.Component),
		_n = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Pn = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.hideSubMenu = function() {
					n.popupWrapper.hideSubTools()
				},
				n.bindToolButton = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.toolButton = t)
					}
				},
				n.bindToolbarPopup = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.toolbarPopup = t)
					}
				},
				n.showSubMenu = function(e) {
					n.props.onHideSubMenu && n.props.onHideSubMenu(),
					n.props.onShowSubMenu && n.props.onShowSubMenu(n),
					n.popupWrapper.show(),
					e.stopPropagation()
				},
				n.popupWrapper = new In(n),
				n
			}
			return _n(t, e),
			t.prototype.componentWillUnmount = function() {
				this.toolbarPopup && (this.toolbarPopup.parentElement && this.toolbarPopup.parentElement.removeChild(this.toolbarPopup), this.toolbarPopup = null)
			},
			t.prototype.shouldComponentUpdate = function(e, t, n) {
				return this.state.subToolStyle.display !== t.subToolStyle.display
			},
			t.prototype.render = function() {
				var e = this,
				t = qt("cdd-menu-item", this.props.className),
				n = qt("cdd-toolbar", "cdd-toolbar-popup", this.props.subMenuClass);
				return r.createElement(f.j, {
					className: t,
					ref: function(t) {
						e.bindToolButton(t)
					},
					onMouseEnter: this.showSubMenu
				},
				r.createElement("span", null, this.props.name), r.createElement("span", {
					className: "cdd-menu-item-padding"
				}), r.createElement(f.h, {
					glyph: "triangle-right"
				}), r.createElement(f.d, {
					className: n,
					style: this.state.subToolStyle,
					ref: function(t) {
						return e.bindToolbarPopup(t)
					}
				},
				r.createElement(f.c, {
					vertical: !0
				},
				this.props.children)))
			},
			t
		} (r.Component),
		On = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		An = function(e) {
			this.enabled = !1,
			this.selected = !1,
			this.tool = e
		},
		xn = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.hideMenu = function() {
					n.popupWrapper.hideSubTools()
				},
				n.bindToolButton = function(e) {
					e && (n.toolButton = e.getElement())
				},
				n.mouseDown = function(e) {
					n.state.isSubToolCreated ? n.popupWrapper.show() : (n.popupWrapper.show(), n.props.firstTimeShowPopup().then((function() {
						n.popupWrapper.hideSubTools(),
						n.setState({
							isSubToolCreated: !0
						},
						(function() {
							return n.popupWrapper.show()
						}))
					}), (function() {
						n.popupWrapper.hideSubTools()
					})))
				},
				n.popupWrapper = new In(n),
				n
			}
			return On(t, e),
			t.prototype.componentWillUnmount = function() {
				this.toolbarPopup && (this.toolbarPopup.parentElement && this.toolbarPopup.parentElement.removeChild(this.toolbarPopup), this.toolbarPopup = null)
			},
			t.prototype.shouldComponentUpdate = function(e, t, n) {
				return this.props.enabled !== e.enabled || this.props.selected !== e.selected || this.state.subToolStyle.display !== t.subToolStyle.display || this.state.isSubToolCreated !== t.isSubToolCreated
			},
			t.prototype.render = function() {
				var e = this,
				t = qt({
					"cdd-tool-button": !0,
					"cdd-tool-button-selected": this.props.selected,
					"cdd-tool-button-disabled": !this.props.enabled
				},
				"cdd-tool-button-" + this.props.tool.name),
				n = "CDW_" + this.props.tool.name,
				o = "cdd-tool-image cdd-tool-image-" + this.props.tool.name,
				i = "dropdown-menu cdd-toolbar cdd-toolbar-popup " + this.props.className;
				return r.createElement(f.c, null, r.createElement(Tn, {
					id: n,
					className: t,
					ref: function(t) {
						return e.bindToolButton(t)
					},
					onMouseDown: this.mouseDown,
					title: this.props.tool.displayName,
					iconClass: o,
					disabled: !this.props.enabled
				},
				r.createElement("div", {
					className: "cdd-tool-expandable"
				})), r.createElement("ul", {
					className: i,
					style: this.state.subToolStyle,
					ref: function(t) {
						return e.toolbarPopup = t
					}
				},
				this.state.isSubToolCreated ? this.props.children: r.createElement("li", {
					className: "dropdown-menu-indicator"
				},
				r.createElement("span", {
					className: "cdd-image-button-indicator"
				}))))
			},
			t
		} (r.Component),
		In = function(e) {
			var t = this;
			this.show = function() {
				var e = t.component.toolbarPopup;
				if (e) {
					var n = t.component.props.toolbarOrientation,
					o = t.component.toolButton,
					r = o.getBoundingClientRect();
					e.style.display = "block";
					var i = n === xt.Vertical ? r.left + r.width + window.pageXOffset: r.left + window.pageXOffset,
					a = n === xt.Vertical ? r.top + window.pageYOffset: r.top + r.height + window.pageYOffset,
					s = n === xt.Vertical ? r.left + o.offsetWidth: r.left,
					c = n === xt.Vertical ? r.top: r.top + o.offsetHeight,
					l = !1;
					if (s + e.scrollWidth > window.innerWidth - 20) {
						var u = void 0;
						t.component instanceof Pn ? u = e.offsetWidth + o.offsetWidth - 2 : (l = !0, u = s + e.offsetWidth - window.innerWidth + 2 * ao.PAGE_PADDING),
						i -= u + 2
					} else n === xt.Vertical && (i += 2);
					var p = !1;
					c + e.scrollHeight > window.innerHeight - 20 ? (p = !0, t.component instanceof xn && (e.style.maxHeight = window.innerHeight - 2 * ao.PAGE_PADDING + "px", e.scrollHeight !== e.offsetHeight && l && (i -= 2 * ao.PAGE_PADDING)), a -= 2 + (u = c + e.offsetHeight - window.innerHeight + 2 * ao.PAGE_PADDING)) : n === xt.Vertical || (a += 2),
					r.top + a < 0 && (a -= r.top + a),
					r.left + i < 0 && (i -= r.left + i),
					t.component.setState({
						subToolStyle: {
							visibility: "visible",
							left: Math.max(0, i) + (l ? ao.PAGE_PADDING: 0) + "px",
							top: Math.max(0, a) + (p ? ao.PAGE_PADDING: 0) + "px",
							display: "block"
						}
					});
					var d = document.getElementById("cdd-toolbar-popup-container");
					d || ((d = document.createElement("div")).id = "cdd-toolbar-popup-container", d.className = "cdd cddroot cdd-toolbar-popup-container", document.body.appendChild(d));
					for (var h = !1,
					f = 0; f < d.children.length; f++) if (d.children.item(f) === e) {
						h = !0;
						break
					}
					h || d.appendChild(e),
					window.addEventListener("mousedown", t.hideSubToolHandler, !0)
				}
			},
			this.hideSubTools = function() {
				var e = t.component.toolbarPopup;
				e && (e.style.display = "none", t.component.setState({
					subToolStyle: {
						visibility: "hidden",
						left: "-9999px",
						top: "-9999px",
						display: "none"
					}
				})),
				window.removeEventListener("mousedown", t.hideSubToolHandler, !0)
			},
			this.hideSubToolHandler = function(e) {
				if (e.target.classList && !e.target.classList.contains("cdd-tool-button-subtool")) {
					if ((t.component instanceof xn || t.component instanceof Pn) && ("a" === e.target.tagName.toLocaleLowerCase() || e.target.classList.contains("dropdown-menu"))) return;
					t.hideSubTools()
				}
			},
			this.component = e,
			e.state = {
				isSubToolCreated: !1,
				subToolStyle: {
					visibility: "hidden",
					left: "-9999px",
					top: "-9999px",
					display: "none"
				}
			}
		},
		Hn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Mn = function(e) {
			this.enabled = !1,
			this.selected = !1,
			this.tool = e
		},
		Rn = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.mouseClick = function(e) {
					n.props.beforeClickHandled && n.props.beforeClickHandled(n),
					n.props.tool.onClick(),
					n.props.afterClickHandled && n.props.afterClickHandled(n)
				},
				n
			}
			return Hn(t, e),
			t.prototype.shouldComponentUpdate = function(e, t, n) {
				return this.props.enabled !== e.enabled || this.props.selected !== e.selected
			},
			t.prototype.render = function() {
				var e = qt({
					"cdd-tool-button": !0,
					"cdd-tool-button-selected": this.props.selected,
					"cdd-tool-button-disabled": !this.props.enabled
				},
				this.props.className, "cdd-tool-button-" + this.props.tool.name),
				t = "CDW_" + this.props.tool.name,
				n = "cdd-tool-image cdd-tool-image-" + this.props.tool.name;
				return r.createElement(Tn, {
					id: t,
					className: e,
					onClick: this.props.enabled ? this.mouseClick: function() {},
					title: this.props.tool.displayName,
					disabled: !this.props.enabled,
					iconClass: n
				})
			},
			t
		} (r.Component),
		Ln = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Nn = function() {
			return (Nn = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		kn = function(e, t, n, o, r, i) {
			this.enabled = !1,
			this.selected = !1,
			this.subTools = [],
			this.isCollapsed = !0,
			this.tool = e,
			this.groupName = t,
			this.subTools = o,
			this.subToolColumnCount = n,
			this.writingMode = r,
			this.collapseOption = i
		},
		jn = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.bindToolButton = function(e) {
					n.toolButton = e ? e.getElement() : null
				},
				n.bindToolbarPopup = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.toolbarPopup = t)
					} else n.toolbarPopup = null
				},
				n.showSubToolsIfNeeded = function() {
					n.hasUp || n.popupWrapper.show(),
					n.hasDown = !1
				},
				n.mouseDown = function(e) {
					n.props.subTools.length > 0 && (n.hasUp = !1, n.hasDown = !0, n.props.enabled ? setTimeout((function() {
						n.showSubToolsIfNeeded()
					}), 250) : n.showSubToolsIfNeeded())
				},
				n.mouseClick = function(e) { (0 === n.props.subTools.length || n.hasDown) && (n.props.tool.onClick(), n.popupWrapper.hideSubTools()),
					n.hasUp = !0
				},
				n.beforeSubToolClick = function(e) {
					n.props.beforeSubToolClickHandled && n.props.beforeSubToolClickHandled(n, e)
				},
				n.afterSubToolClick = function(e) {
					n.popupWrapper.hideSubTools(),
					n.props.afterSubToolClickHandled && n.props.afterSubToolClickHandled(n, e)
				},
				n.popupWrapper = new In(n),
				n
			}
			return Ln(t, e),
			t.prototype.componentWillReceiveProps = function(e, t) {
				e.viewOnly && this.popupWrapper.hideSubTools()
			},
			t.prototype.componentWillUnmount = function() {
				this.toolbarPopup && (this.toolbarPopup.parentElement && this.toolbarPopup.parentElement.removeChild(this.toolbarPopup), this.toolbarPopup = null)
			},
			t.prototype.shouldComponentUpdate = function(e, t, n) {
				return this.props.enabled !== e.enabled || this.props.selected !== e.selected || this.props.tool !== e.tool || this.state.subToolStyle.display !== t.subToolStyle.display
			},
			t.prototype.render = function() {
				var e = this,
				t = [];
				if (this.props.subTools.length > 0) {
					var n = this.props.subTools,
					o = [];
					n.map((function(t, n) {
						var i = e.props.subToolColumnCount > 0 ? Math.floor(n / e.props.subToolColumnCount) : 0,
						a = o[i];
						void 0 === a && (a = [], o[i] = a),
						a.push(r.createElement(Rn, Nn({
							beforeClickHandled: e.beforeSubToolClick,
							afterClickHandled: e.afterSubToolClick,
							className: "cdd-tool-button-subtool",
							key: "subTool_" + i + "_" + n + "_" + t.tool.name
						},
						t)))
					})),
					o.map((function(n, o) {
						t.push(r.createElement(f.c, {
							key: "subToolbar_row_" + o,
							vertical: e.props.writingMode === Rt.Vertical
						},
						n))
					}))
				}
				var i = qt({
					"cdd-tool-button": !0,
					"cdd-tool-button-selected": this.props.selected
				},
				"cdd-tool-button-" + this.props.tool.name),
				a = "CDW_" + this.props.tool.name,
				s = qt({
					"cdd-tool-image": !0,
					"cdd-tool-image-disabled": !this.props.enabled
				},
				"cdd-tool-image-" + this.props.tool.name);
				return r.createElement(f.c, null, r.createElement(Tn, {
					id: a,
					className: i,
					ref: function(t) {
						e.bindToolButton(t)
					},
					onClick: this.mouseClick,
					onMouseDown: this.mouseDown,
					title: this.props.groupName ? this.props.groupName + ": " + this.props.tool.displayName: this.props.tool.displayName,
					iconClass: s
				},
				r.createElement("div", {
					className: "cdd-tool-expandable"
				})), 0 === this.props.subTools.length || r.createElement(f.d, {
					className: "cdd-toolbar cdd-toolbar-popup cdd-panel-group-buttons",
					style: this.state.subToolStyle,
					ref: function(t) {
						return e.bindToolbarPopup(t)
					}
				},
				r.createElement(f.c, {
					vertical: this.props.writingMode === Rt.Horizontal
				},
				t)))
			},
			t
		} (r.Component),
		Wn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Fn = function() {
			return (Fn = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		Bn = function(e, t) {
			var n = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
			}
			return n
		},
		Un = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Wn(t, e),
			t.prototype.render = function() {
				var e = this.props,
				t = e.className,
				n = e.iconClass,
				o = (e.children, e.imageWidth),
				i = e.imageHeight,
				a = Bn(e, ["className", "iconClass", "children", "imageWidth", "imageHeight"]),
				s = {
					width: o,
					height: i
				};
				return r.createElement(f.b, Fn({
					className: "cdd-empty-image-button " + t
				},
				a, {
					disabled: !0
				}), r.createElement("div", {
					className: n,
					style: s
				}))
			},
			t
		} (r.Component),
		Vn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		zn = function() {
			return (zn = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		Kn = function(e, t) {
			var n = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
			}
			return n
		},
		Gn = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.isLoaded = !1,
				t.isLoadingError = !1,
				t.bindButton = function(e) {
					if (null !== e) {
						var n = m.findDOMNode(e);
						n && (t.buttonHTMLElement = n)
					}
				},
				t.active = function() {
					t.isLoaded || (t.indicatorHTMLElement.style.display = "block", t.isLoadingError ? t.imageHTMLElement.src = t.props.imageUrl + "?v=" + Date.now() : t.imageHTMLElement.src = t.props.imageUrl)
				},
				t
			}
			return Vn(t, e),
			t.prototype.getElement = function() {
				return this.buttonHTMLElement
			},
			t.prototype.render = function() {
				var e = this,
				t = this.props,
				n = t.className,
				o = t.children,
				i = t.iconClass,
				a = (t.imageUrl, t.imageWidth),
				s = t.imageHeight,
				c = Kn(t, ["className", "children", "iconClass", "imageUrl", "imageWidth", "imageHeight"]),
				l = {
					width: a,
					height: s
				},
				u = {
					maxWidth: a,
					maxHeight: s
				};
				return r.createElement(f.b, zn({
					className: n
				},
				c, {
					ref: function(t) {
						e.bindButton(t)
					}
				}), r.createElement("div", {
					className: "cdd-image-button-content",
					style: l
				},
				r.createElement("span", null), r.createElement("img", {
					className: i,
					style: u,
					ref: function(t) {
						e.imageHTMLElement = t
					},
					onLoad: function() {
						e.isLoaded = !0,
						e.isLoadingError = !1,
						e.indicatorHTMLElement.style.display = "none"
					},
					onError: function() {
						e.isLoaded = !1,
						e.isLoadingError = !0,
						e.indicatorHTMLElement.style.display = "none"
					}
				}), o, r.createElement("div", {
					className: "cdd-image-button-hover"
				}), r.createElement("div", {
					className: "cdd-image-button-indicator",
					ref: function(t) {
						e.indicatorHTMLElement = t
					}
				})))
			},
			t
		} (r.Component),
		Xn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Yn = function() {
			return (Yn = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		qn = function(e, t) {
			var n = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
			}
			return n
		},
		Jn = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.templatesImages = [],
				n.mouseClick = function(e) {
					n.props.beforeSelectTemplate && n.props.beforeSelectTemplate(),
					c.activeInstanceHub.progressIndicatorController.show();
					var t = ke.a.basePath + "/templates/" + e.selectedName + "/" + e.selectedRow + "_" + e.selectedColumn + n.props.extension.cdxml;
					Ne.get(t).then((function(t) {
						c.activeInstanceHub.progressIndicatorController.hide(),
						a.TemplateManager.setSelectedTemplate(t),
						n.props.onSelectTemplate(e)
					})).
					catch((function(e) {
						c.activeInstanceHub.progressIndicatorController.hide(),
						c.activeInstanceHub.messagePresenterController.error(e.message)
					}))
				},
				n
			}
			return Xn(t, e),
			t.prototype.render = function() {
				var e = this,
				t = this.props,
				n = t.selectedTemplate,
				o = (t.beforeSelectTemplate, t.onSelectTemplate, t.children, t.onShowSubMenu),
				i = t.onHideSubMenu,
				a = t.extension,
				s = t.category,
				c = qn(t, ["selectedTemplate", "beforeSelectTemplate", "onSelectTemplate", "children", "onShowSubMenu", "onHideSubMenu", "extension", "category"]),
				l = {
					"cdd-tool-button": !0,
					"cdd-tool-button-subtool": !0,
					"cdd-templates-image-button": !0
				},
				u = [];
				if (s && a) for (var p = function(t) {
					for (var o = [], i = function(i) {
						if ((t - 1) * s.columns + i <= s.count) {
							l["cdd-templates-image-button-selected"] = d.props.selectedTemplate && d.props.name === n.selectedName && t === n.selectedRow && i === n.selectedColumn;
							var c = qt(l);
							o.push(r.createElement(Gn, {
								key: i,
								ref: function(t) {
									e.bindImageButtons(t)
								},
								className: c,
								imageWidth: d.props.category.imgWidth,
								imageHeight: d.props.category.imgHeight,
								imageUrl: ke.a.basePath + "/templates/" + d.props.name + "/" + t + "_" + i + a.image,
								iconClass: "cdd-templates-image-button-thumbnail",
								onClick: function(n) {
									e.mouseClick({
										selectedName: e.props.name,
										selectedRow: t,
										selectedColumn: i
									})
								}
							}))
						} else {
							c = qt(l);
							o.push(r.createElement(Un, {
								key: i,
								className: c,
								iconClass: "cdd-templates-image-button-thumbnail",
								imageWidth: d.props.category.imgWidth,
								imageHeight: d.props.category.imgHeight
							}))
						}
					},
					c = 1; c <= s.columns; c++) i(c);
					u.push(r.createElement(f.c, {
						key: t
					},
					o))
				},
				d = this, h = 1; h <= s.rows; h++) p(h);
				return r.createElement(Pn, Yn({},
				c, {
					onShowSubMenu: function(t) {
						e.templatesImages.forEach((function(e) {
							e.active()
						})),
						o(t)
					},
					onHideSubMenu: function() {
						i()
					}
				}), u)
			},
			t.prototype.bindImageButtons = function(e) {
				e && this.templatesImages.push(e)
			},
			t
		} (r.Component),
		Zn = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Qn = function() {
			return (Qn = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		$n = function(e, t) {
			var n = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
			}
			return n
		},
		eo = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Zn(t, e),
			t
		} (An),
		to = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.createTemplateIndex = function() {
					var e = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "/templates/templateIndex.json"));
					return new Promise((function(t, o) {
						Ne.getWithCache(e).then((function(e) {
							n.setState({
								templateIndex: JSON.parse(e)
							}),
							t()
						})).
						catch((function(e) {
							c.activeInstanceHub.messagePresenterController.error(e.message),
							o()
						}))
					}))
				},
				n.onSelectTemplate = function(e) {
					n.props.beforeClickHandled && n.props.beforeClickHandled(e),
					n.props.tool.onClick()
				},
				n.state = {
					templateIndex: null
				},
				n
			}
			return Zn(t, e),
			t.prototype.componentWillReceiveProps = function(e, t) {
				e.viewOnly && (this.subMenu && this.subMenu.hideSubMenu(), this.menu && this.menu.hideMenu())
			},
			t.prototype.shouldComponentUpdate = function(e, t, n) {
				return this.props.enabled !== e.enabled || this.props.selected !== e.selected || this.props.selectedTemplate !== e.selectedTemplate || this.state.templateIndex !== t.templateIndex
			},
			t.prototype.render = function() {
				var e = this,
				t = this.props,
				n = t.selectedTemplate,
				o = (t.beforeClickHandled, t.children, t.enabled),
				i = $n(t, ["selectedTemplate", "beforeClickHandled", "children", "enabled"]),
				a = this.state.templateIndex;
				return r.createElement(xn, Qn({
					className: "cdd-TemplateMenu cdd-templates-menu cdd-font",
					enabled: o
				},
				i, {
					ref: function(t) {
						return e.menu = t
					},
					firstTimeShowPopup: this.createTemplateIndex
				}), a && a.categories ? a.categories.map((function(t, o) {
					return r.createElement(Jn, {
						key: o,
						className: "cdd-templates-menu-item",
						subMenuClass: "cdd-templates-submenu cdd-TemplateSubMenu",
						selectedTemplate: n,
						onSelectTemplate: e.onSelectTemplate,
						name: t.name,
						extension: a.extension,
						category: t,
						beforeSelectTemplate: function() {
							e.subMenu && e.subMenu.hideSubMenu(),
							e.menu.hideMenu()
						},
						onShowSubMenu: function(t) {
							e.subMenu = t
						},
						onHideSubMenu: function() {
							e.subMenu && e.subMenu.hideSubMenu()
						},
						toolbarOrientation: xt.Vertical
					})
				})) : void 0)
			},
			t
		} (r.Component),
		no = function(e, t, n, o) {
			this.name = e,
			this.displayName = t,
			this.command = n,
			this.type = "button",
			this.onClick = o
		},
		oo = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ro = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		io = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ao = function() {
			function e(e) {
				this.toolsProps = [],
				this.isClipboardFirstLoadDone = !1,
				this.isDrawing = !1,
				this.instanceHub = e
			}
			var t;
			return t = e,
			Object.defineProperty(e.prototype, "isViewOnly", {
				get: function() {
					return this.instanceHub.configurationManager.getParams().viewOnly
				},
				set: function(e) {
					this.instanceHub.configurationManager.getParams().viewOnly = e
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "preservePageInfo", {
				get: function() {
					return this.instanceHub.configurationManager.getParams().preservePageInfo
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.newDocument = function(e, t) {
				if (null != this.cdDoc) {
					var n = this.cdDoc;
					setTimeout((function() {
						n.delete()
					}), 0)
				}
				this.cdDoc = new a.CDDocument(a.ViewType.Normal);
				var o = this.cdDoc.getMutableMainPage(),
				r = new a.CwWebCanvasPort(null, null);
				this.cdDoc.setPort(r),
				r.setPage(o),
				this.bindDocumentView(),
				this.registerEventHandler(),
				this.newDocumentCallback(this.cdDoc, e, t),
				this.registerDrawCallback()
			},
			e.prototype.documentToB64CDX = function() {
				return this.saveAs(Gt.a.B64CDX)
			},
			e.prototype.documentToXml = function() {
				return this.saveAs(Gt.a.CDXML)
			},
			e.prototype.documentToSMILES = function() {
				return this.saveAs(Gt.a.SMILES)
			},
			e.prototype.documentToInChI = function() {
				return this.saveAs(Gt.a.InChI)
			},
			e.prototype.documentToInChIKey = function() {
				return this.saveAs(Gt.a.InChIKey)
			},
			e.prototype.documentToRXNV2000 = function() {
				return this.saveAs(Gt.a.RXNV2000)
			},
			e.prototype.documentToRXNV3000 = function() {
				return this.saveAs(Gt.a.RXNV3000)
			},
			e.prototype.documentToPNG = function(e) {
				var t = Object.assign({},
				e);
				return this.saveAs(Gt.a.PNG, t)
			},
			e.prototype.documentToPreviewPNG = function(e) {
				var t = Object.assign({},
				e);
				return this.saveAs(Gt.a.PreviewPNG, t)
			},
			e.prototype.documentToSVG = function(e) {
				var t = Object.assign({},
				e);
				return a.WriteDocumentAPI.writeSVG(this.cdDoc, t)
			},
			e.prototype.saveAs = function(e, t) {
				switch (e) {
				case Gt.a.CDXML:
					return a.WriteDocumentAPI.writeCDXML(this.cdDoc);
				case Gt.a.B64CDX:
					return a.WriteDocumentAPI.writeBase64CDX(this.cdDoc);
				case Gt.a.SMILES:
					return a.WriteDocumentAPI.writeSMILES(this.cdDoc);
				case Gt.a.InChI:
					return a.WriteDocumentAPI.writeInChI(this.cdDoc);
				case Gt.a.InChIKey:
					return a.WriteDocumentAPI.writeInChIKey(this.cdDoc);
				case Gt.a.RXNV2000:
					return a.WriteDocumentAPI.writeRXNV2000(this.cdDoc);
				case Gt.a.RXNV3000:
					return a.WriteDocumentAPI.writeRXNV3000(this.cdDoc);
				case Gt.a.PNG:
					return a.WriteDocumentAPI.writePNG(this.cdDoc, t);
				case Gt.a.PreviewPNG:
					return a.WriteDocumentAPI.writePreviewPNG(this.cdDoc, t);
				case Gt.a.SVG:
					return a.WriteDocumentAPI.writeSVG(this.cdDoc, t);
				default:
					throw new Error("Could not convert to format " + e)
				}
			},
			e.prototype.documentToMOLV2000 = function() {
				return a.WriteDocumentAPI.writeMOLV2000(this.cdDoc)
			},
			e.prototype.documentToMOLV3000 = function() {
				return a.WriteDocumentAPI.writeMOLV3000(this.cdDoc)
			},
			e.prototype.setViewOnly = function(e) {
				var t = this,
				n = this.isViewOnly;
				this.isViewOnly = e,
				n !== e && (e && a.CursorService.getSharedService().SetCursorByID(0), this.viewOnlyCallback(e), e && (this.instanceHub.dialogContainerController.hide(), this.instanceHub.textEditorController.getTextEditor().dismiss()), e || this.isClipboardFirstLoadDone || Kt.doFirstTime(this.instanceHub, (function() {
					t.isClipboardFirstLoadDone = !0
				})))
			},
			e.prototype.fitToContainer = function() {
				var e = this,
				t = this.getContainerSize();
				if (! (t.width <= 0 || t.height <= 0)) {
					if (this.preservePageInfo) {
						var n = new a.CurRect(0, 0, t.height, t.width);
						this.cdDoc.performWithUndoModified((function() {
							e.cdDoc.scaleToFitPageInRect(n)
						}))
					} else this.cdDoc.performWithUndoModified((function() {
						e.scaleContentToContainer(t)
					}));
					this.cdDoc.performWithUndoModified((function() {}))
				}
			},
			e.prototype.shrinkToFit = function() {
				var e = this.getContainerSize();
				e.width <= 0 || e.height <= 0 || (this.preservePageInfo, this.shrinkContentToContainer(e), this.cdDoc.performWithUndoModified((function() {})))
			},
			e.prototype.registerEventHandler = function() {
				this.cdDoc && (this.setContentChangedHandler(), this.setScaleChangedHandler(), this.setSizeChangedHandler(), this.setSelectionChangedHandler())
			},
			e.prototype.processChange = function(e) {
				var t = this;
				return new Promise((function(n) {
					c.activeInstanceHub = t.instanceHub,
					t.checkToolState(),
					e && (A.isChrome() || A.isFirefox() ? t.redrawAsync() : t.redraw()),
					n()
				}))
			},
			e.prototype.redraw = function() {
				this.instanceHub.chemDraw && this.drawDocument && this.drawDocument()
			},
			e.prototype.redrawAsync = function() {
				var e = this;
				this.isDrawing || (this.isDrawing = !0, window.requestAnimationFrame((function() {
					e.redraw(),
					e.isDrawing = !1
				})))
			},
			e.prototype.initToolbar = function(e, t) {
				var n = this.removeFeatureDisabledTools(e.layout.getOrderedItems());
				this.toolbarModel = a.ToolbarModel.createToolbarModel(this.createToolbarConfig(t, n));
				var o = function(e) {
					var n = t.getTool(e);
					if (n) {
						if (! (n instanceof Yt)) return n;
						console.warn(n.reason)
					} else console.warn("Could not find tool: " + e)
				};
				this.toolsProps = [];
				for (var r = 0,
				i = n; r < i.length; r++) {
					var s = i[r];
					if (s.isGroup) {
						for (var c = s.getColumns(), l = s.getTools(), u = void 0, p = s.getName(), d = [], h = 0, f = l; h < f.length; h++) { (g = o(f[h])) && (void 0 === u && (u = g), d.push(new Mn(g)))
						}
						if (0 === d.length);
						else if (1 === d.length) this.toolsProps.push(d[0]);
						else {
							var m = new kn(u, p, c, d, s.getGroupToolsWritingMode(), s.getGroupCollapseOption());
							this.toolsProps.push(m)
						}
					} else {
						var g; (g = o(s.getName())) && ("Templates" === g.name ? this.toolsProps.push(new eo(g)) : this.toolsProps.push(new Mn(g)))
					}
				}
				this.initToolbarCallback && this.initToolbarCallback(2)
			},
			e.prototype.checkToolState = function() {
				var e = this.toolbarModel;
				if (void 0 !== e) {
					this.cdDoc.toolbarModel = e,
					e.update(this.cdDoc);
					for (var t = new Map,
					n = 0; n < e.numberOfItems; n++) {
						var o = e.itemAtIndex(n);
						if (o instanceof a.SelectableToolGroupModel) for (var r = 0; r < o.numberOfItems; r++) {
							var i = o.itemAtIndex(r);
							t.set(i.command, i)
						} else t.set(o.command, o)
					}
					for (var s = !1,
					c = function(e) {
						if (e.tool instanceof no) {
							var n = t.get(e.tool.command),
							o = e.selected,
							r = e.enabled;
							n ? (e.selected = n.isSelected, e.enabled = n.isEnabled, o === e.selected && r === e.enabled || (s = !0)) : console.error('Command "' + e.tool.command + '" does not exist')
						} else e.enabled = !1,
						e.selected = !1
					},
					l = function(e) {
						if (e instanceof Mn) c(e);
						else if (e instanceof kn) e.subTools.forEach((function(t) {
							c(t),
							t.selected && (e.tool = t.tool)
						})),
						c(e);
						else if (e instanceof An) {
							if (c(e), e instanceof eo) if (!e.enabled || !e.selected) e.selectedTemplate = null
						}
					},
					u = 0, p = this.toolsProps; u < p.length; u++) {
						l(p[u])
					}
					s && this.checkToolStateCallback()
				}
			},
			e.prototype.handleCommand = function(e) {
				var t = a.getCommandIDForName(e);
				return a.handleCommand(t, this.cdDoc)
			},
			e.prototype.getAvailableCommandNames = function() {
				return a.getAvailableCommandNames()
			},
			e.prototype.getCommandIDForName = function(e) {
				return a.getCommandIDForName(e)
			},
			e.prototype.isCommandEnabled = function(e) {
				var t = a.getCommandIDForName(e);
				return a.isCommandEnabled(t)
			},
			e.prototype.isCommandChecked = function(e) {
				var t = a.getCommandIDForName(e);
				return a.isCommandSelected(t)
			},
			e.prototype.scaleContentToContainer = function(e) {
				var n = this.instanceHub.documentStyleManager.getDefaultZoomLevelForDocument(this.cdDoc),
				o = this.cdDoc.contentBounds;
				if (0 !== o.width && 0 !== o.height) {
					var r = this.cdDoc.getMainPage().getScale().scale,
					i = 20 / r,
					s = o.width / i * n,
					c = o.height / i * n,
					l = 2 * (t.PAGE_PADDING + 1),
					u = Math.max(Math.min(s, e.width - l), 0),
					p = Math.max(Math.min(c, e.height - l), 0),
					d = new a.CurRect(0, 0, p, u);
					this.cdDoc.scaleToFitContentInRect(d)
				} else this.cdDoc.setZoomLevel(n)
			},
			e.prototype.shrinkContentToContainer = function(e) {
				var n = this,
				o = t.PAGE_PADDING,
				r = Math.max(e.width - 2 * o, 0),
				i = Math.max(e.height - 2 * o, 0),
				s = new a.CurRect(0, 0, i, r);
				this.cdDoc.performWithUndoModified((function() {
					n.cdDoc.shrinkToFitContentInRect(s)
				}))
			},
			e.prototype.registerDrawCallback = function() {
				this.cdDoc.getPort().drawCallback = this.drawCallback
			},
			e.prototype.setContentChangedHandler = function() {
				var e = this;
				this.cdDoc.setNotificationHandler("ContentChanged", (function(t) { ! e.preservePageInfo && e.resizeDocument && e.resizeDocument(),
					e.contentChangedHandlerCallback && e.contentChangedHandlerCallback(e.cdDoc, t.data)
				}))
			},
			e.prototype.setScaleChangedHandler = function() {
				var e = this;
				this.cdDoc.setNotificationHandler("ScaleChanged", (function(t) {
					e.scaleChangedHandlerCallback && e.scaleChangedHandlerCallback(e.cdDoc, t.data)
				}))
			},
			e.prototype.setSizeChangedHandler = function() {
				var e = this;
				this.cdDoc.setNotificationHandler("SizeChanged", (function(t) {
					e.sizeChangedHandlerCallback && e.sizeChangedHandlerCallback(e.cdDoc, t.data)
				}))
			},
			e.prototype.setSelectionChangedHandler = function() {
				var e = this;
				this.cdDoc.setNotificationHandler("SelectionChanged", (function(t) {
					e.selectionChangedHandlerCallback && e.selectionChangedHandlerCallback()
				}))
			},
			e.prototype.bindDocumentView = function() {
				var e = this;
				if (this.cdDoc) {
					var t = this.getVisibleClientRect,
					n = this.scrollClientRectToView;
					void 0 === t && (t = function() {
						var t = e.cdDoc.getMutableMainPage(),
						n = t.curRect.width,
						o = t.curRect.height;
						return new Xt(0, 0, n, o)
					}),
					void 0 === n && (n = function(e) {}),
					this.cdDoc.view = {
						getVisibleClientRect: function() {
							var e = t();
							return new a.CurRect(e.top, e.left, e.bottom, e.right)
						},
						scrollClientRectToView: function(e) {
							n(new Xt(e.left, e.top, e.right, e.bottom))
						}
					}
				}
			},
			e.prototype.removeFeatureDisabledTools = function(e) {
				var t = this,
				n = function(e) {
					return ! (!t.instanceHub.chemistryService.isEnabled && ["StructureToName", "NameToStructure"].indexOf(e) >= 0) || (console.warn("Tool " + e + " is not displayed, because WebService feature is disabled in configuration."), !1)
				};
				return e.filter((function(e) {
					return e.isGroup ? (e.tools = e.getTools().filter((function(e) {
						return n(e)
					})), !0) : n(e.getName())
				}))
			},
			e.prototype.createToolbarConfig = function(e, t) {
				for (var n = [], o = function(t) {
					if (t.isGroup) {
						var o = t.getTools(),
						r = [];
						o.forEach((function(t) {
							var n = e.getTool(t);
							n && r.push(n)
						})),
						n.push({
							type: "drawingToolGroup",
							displayName: t.getName(),
							tools: r
						})
					} else {
						var i = e.getTool(t.getName());
						i && n.push(i)
					}
				},
				r = 0, i = t; r < i.length; r++) {
					o(i[r])
				}
				return n
			},
			e.PAGE_PADDING = 10,
			e = t = oo([Object(de.injectable)(), io(0, Object(de.inject)(Ce.InstanceHub)), ro("design:paramtypes", [wt])], e)
		} (),
		so = n(296),
		co = function() {
			this.getAuthType = function() {
				return Lt.Basic
			}
		},
		lo = function() {
			function e() {}
			return e.valueOf = function(e) {
				switch (e.toLowerCase()) {
				case "horizontal":
					return xt.Horizontal;
				case "vertical":
					return xt.Vertical;
				case "mixed":
					return xt.Mixed;
				default:
					return xt.Horizontal
				}
			},
			e
		} (),
		uo = function() {
			function e() {}
			return e.valueOf = function(e) {
				switch (e.toLowerCase()) {
				case "default":
					return It.DEFAULT;
				case "general":
					return It.GENERAL;
				case "drawing":
					return It.DRAWING;
				default:
					return It.DEFAULT
				}
			},
			e
		} (),
		po = function() {
			function e() {}
			return e.fromString = function(e) {
				if (void 0 !== e) switch (e.toLowerCase()) {
				case "auto":
					return Mt.Auto;
				case "always":
					return Mt.Always;
				case "never":
					return Mt.Never;
				default:
					return Mt.Auto
				}
				return Mt.Auto
			},
			e
		} (),
		ho = function() {
			function e() {}
			return e.fromString = function(e) {
				if (e) switch (e.toLowerCase()) {
				case "horizental":
					return Rt.Horizontal;
				case "vertical":
					return Rt.Vertical
				}
				return Rt.Horizontal
			},
			e
		} (),
		fo = function() {
			function e(e, t, n, o, r, i) {
				var a = this;
				this.getName = function() {
					return a.name
				},
				this.getCategory = function() {
					return a.category
				},
				this.getTools = function() {
					return a.tools
				},
				this.getColumns = function() {
					return a.columns
				},
				this.getGroupCollapseOption = function() {
					return a.groupCollapseOption
				},
				this.category = e,
				this.name = t,
				n ? (this.tools = n, this.columns = o, this.isGroup = !0, this.groupToolsWritingMode = ho.fromString(r), this.groupCollapseOption = po.fromString(i)) : (this.tools = [t], this.isGroup = !1)
			}
			return e.prototype.getGroupToolsWritingMode = function() {
				return this.groupToolsWritingMode
			},
			e
		} (),
		mo = function(e, t) {
			var n = this;
			this.getItemById = function(e) {
				return n.idLayoutItemMap.get(e)
			},
			this.isLayoutLoaded = function() {
				return void 0 !== n.order
			},
			this.getOrientation = function() {
				return n.orientation
			},
			this.getOrderedItems = function() {
				return n.order
			},
			this.getIconSet = function() {
				return n.iconSet
			},
			this.setOrientation = function(e) {
				n.orientation = e,
				n.orientation === xt.Mixed ? n.iconSet = Ht.Categorized: n.iconSet = Ht.Default
			},
			this.order = e,
			this.orientation = t,
			this.orientation === xt.Mixed ? this.iconSet = Ht.Categorized: this.iconSet = Ht.Default,
			this.idLayoutItemMap = new Map;
			for (var o = 0,
			r = this.order; o < r.length; o++) {
				var i = r[o];
				this.idLayoutItemMap.set(i.getName(), i)
			}
		},
		go = function() {
			var e = this;
			this.getAuthType = function() {
				return Lt.OAuth
			},
			this.getUrl = function() {
				return e.url
			},
			this.setUrl = function(t) {
				e.url = t
			},
			this.getGrantType = function() {
				return e.grantType
			},
			this.setGrantType = function(t) {
				e.grantType = t
			},
			this.getClientId = function() {
				return e.clientId
			},
			this.setClientId = function(t) {
				e.clientId = t
			},
			this.getUsername = function() {
				return e.username
			},
			this.setUsername = function(t) {
				e.username = t
			}
		},
		bo = function(e) {
			var t = this;
			this.getRemoteChemistryServiceURL = function() {
				return t.properties.get(Cn)
			},
			this.getStyleSheet = function() {
				return t.properties.get(vn)
			},
			this.getProperties = function() {
				return t.properties
			},
			this.properties = e
		},
		yo = function(e, t) {
			var n = this;
			this.getUrl = function(e) {
				return ke.a.join(n.url, e)
			},
			this.isValid = function() {
				return "" !== n.url
			},
			this.url = e && "" !== e ? ke.a.join(ke.a.basePath, "themes", e) : t
		},
		Co = new
		function() {
			var e = this;
			this.parse = function(t) {
				var n, o, r, i, a;
				if (void 0 !== t) return void 0 !== t[Jt] && (n = e.parseTheme(t[Jt])),
				void 0 !== t[$t] && (o = e.parseLayout(t[$t])),
				void 0 !== t[en] && (r = e.parseFeatures(t[en])),
				void 0 !== t[tn] && (i = e.parseProperties(t[tn])),
				void 0 !== t[nn] && (a = e.parseAuthConfig(t[nn])),
				{
					theme: n,
					layout: o,
					features: r,
					appProperties: i,
					authConfig: a
				}
			},
			this.parseTheme = function(e) {
				var t = e[Zt],
				n = e[Qt];
				return new yo(t, n)
			},
			this.parseLayout = function(t) {
				var n = e.getOrientation(t),
				o = e.interpretLayoutNodes(t);
				return new mo(o, n)
			},
			this.parseFeatures = function(t) {
				var n = new Map,
				o = e.getEnabledFeatureNodes(t),
				r = e.getDisabledFeatureNodes(t);
				return e.setConfigForFeatures(n, o, !0),
				e.setConfigForFeatures(n, r, !1),
				n
			},
			this.parseProperties = function(t) {
				var n = e.interpretPropertyNodes(t);
				return new bo(n)
			},
			this.parseAuthConfig = function(t) {
				var n = t[mn];
				return gn === n.toLowerCase() ? e.parseOAuthConfig(t) : new co
			},
			this.getOrientation = function(e) {
				if (void 0 === e[hn]) return xt.Horizontal;
				var t = e[hn];
				return "string" != typeof t ? xt.Horizontal: lo.valueOf(t)
			},
			this.interpretLayoutNodes = function(t) {
				var n = [],
				o = t[an];
				if (! (o instanceof Array)) return n;
				for (var r = o,
				i = r.length,
				a = 0; a < i; a++) for (var s = r[a], c = s[sn] || fn, l = uo.valueOf(c), u = s[ln], p = u.length, d = 0; d < p; d++) {
					var h = u[d];
					n.push(e.toLayoutItem(l, h))
				}
				return n
			},
			this.toLayoutItem = function(t, n) {
				return "string" == typeof n ? new fo(t, n) : e.toLayoutGroupItem(t, n)
			},
			this.toLayoutGroupItem = function(e, t) {
				var n = t[cn],
				o = [],
				r = t[ln];
				if (void 0 !== r) for (var i = r,
				a = i.length,
				s = 0; s < a; s++) o.push(i[s]);
				var c = t[pn] || 0,
				l = t[un],
				u = t[dn];
				return new fo(e, n, o, c, u, l)
			},
			this.getEnabledFeatureNodes = function(e) {
				return e[on]
			},
			this.getDisabledFeatureNodes = function(e) {
				return e[rn]
			},
			this.setConfigForFeatures = function(e, t, n) {
				if (void 0 !== t) for (var o = t.length,
				r = 0; r < o; r++) {
					var i = t[r];
					e.set(N.make(i), n)
				}
			},
			this.interpretPropertyNodes = function(e) {
				var t = new Map;
				for (var n in e) if (e.hasOwnProperty(n)) {
					var o = e[n];
					t.set(n, o)
				}
				return t
			},
			this.parseOAuthConfig = function(e) {
				var t = new go,
				n = e[bn],
				o = e[yn] || "password";
				return t.setUrl(n),
				t.setGrantType(o),
				t
			},
			this.mergeConfig = function(t, n) {
				return t === n || void 0 === t ? n: void 0 === n ? t: (e.mergeTheme(t, n), e.mergeToolsLayout(t, n), e.mergeFeatures(t, n), e.mergeAppProperties(t, n), e.mergeAuthConfig(t, n), t)
			},
			this.mergeTheme = function(e, t) {
				void 0 === e.theme && (e.theme = t.theme)
			},
			this.mergeToolsLayout = function(e, t) {
				if (void 0 === e.layout) e.layout = t.layout;
				else if (e.layout && void 0 === e.layout.getOrderedItems()) {
					var n = e.layout.getOrientation();
					e.layout = t.layout,
					e.layout && e.layout.setOrientation(n)
				}
			},
			this.mergeFeatures = function(e, t) {
				if (void 0 === e.features) e.features = t.features;
				else if (void 0 !== t.features) {
					var n = t.features,
					o = e.features;
					n.forEach((function(e, t) {
						o.has(t) || o.set(t, e)
					}))
				}
			},
			this.mergeAppProperties = function(e, t) {
				if (void 0 === e.appProperties) e.appProperties = t.appProperties;
				else if (void 0 !== t.appProperties) {
					var n = t.appProperties.getProperties(),
					o = e.appProperties.getProperties();
					n.forEach((function(e, t) {
						o.has(t) || o.set(t, e)
					}))
				}
			},
			this.mergeAuthConfig = function(e, t) {
				if (void 0 === e.authConfig) e.authConfig = t.authConfig;
				else if (void 0 !== t.authConfig) {
					var n = t.authConfig,
					o = e.authConfig;
					if (n.getAuthType() === Lt.OAuth && o.getAuthType() === Lt.OAuth) {
						var r = n,
						i = o;
						void 0 === i.getUrl() && i.setUrl(r.getUrl()),
						void 0 === i.getGrantType() && i.setGrantType(r.getGrantType())
					}
				}
			}
		},
		vo = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		wo = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		So = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Eo = function() {
			function e(e) {
				var t = this;
				this.getParams = function() {
					return t.params
				},
				this.setParams = function(e) {
					t.params = e
				},
				this.getConfig = function() {
					return t.configuration
				},
				this.setConfigText = function(e) {
					if (e || "" !== e) try {
						var n = JSON.parse(e),
						o = Co.parse(n);
						t.configuration = o
					} catch(e) {
						window.alert(e.message)
					}
				},
				this.updateConfigText = function(e) {
					if (e || "" !== e) try {
						var n = JSON.parse(e),
						o = Co.parse(n);
						t.updateConfig(o)
					} catch(e) {
						window.alert(e.message)
					}
				},
				this.updateConfigObject = function(e) {
					var n = Co.parse(e);
					t.updateConfig(n)
				},
				this.updateConfigByUrl = function(e) {
					return new Promise((function(n, o) {
						Ne.getWithCache(e).then((function(e) {
							try {
								var r = JSON.parse(e),
								i = Co.parse(r);
								t.updateConfig(i),
								n(i)
							} catch(e) {
								o(new Error("Failed to parse configuration file. Reason: " + e.message + "."))
							}
						})).
						catch((function(t) {
							o(new Error("Failed to get configuration file from " + e + ". Reason: " + t.statusText + "."))
						}))
					}))
				},
				this.updateConfig = function(e) {
					e = Co.mergeConfig(e, t.getConfig()),
					t.configuration = e
				},
				this.licenseManager = e
			}
			return e = vo([Object(de.injectable)(), So(0, Object(de.inject)(Ce.LicenseManager)), wo("design:paramtypes", [Object])], e)
		} (),
		Do = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		To = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		_o = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Po = function() {
			function e(e) {
				this.MIN_BOND_LENGTH = 21.6,
				this.instanceHub = e,
				this.initCDXMLs()
			}
			return e.prototype.applyConfiguredStyle = function(e) {
				var t = this.instanceHub.configurationManager.getConfig().appProperties.getStyleSheet();
				if (t) {
					var n = this.getCDXMLForStyle(t);
					if (n) {
						a.ReadDocumentAPI.readCDXML(e, n);
						var o = this.getDefaultZoomLevelForCurrentStyle();
						if (o > 1) e.getZoomLevel() < o && e.performWithUndoDisabled((function() {
							e.setZoomLevel(o)
						}))
					} else console.warn('Style "' + t + '" is not supported.')
				}
			},
			e.prototype.getDefaultZoomLevelForCurrentStyle = function() {
				var e = this.instanceHub.configurationManager.getConfig().appProperties.getStyleSheet();
				return e && e.toUpperCase() === "ACS Document 1996".toUpperCase() ? 1.5 : 1
			},
			e.prototype.getDefaultZoomLevelForDocument = function(e) {
				var t = e.getSetting(a.CDXDatumID.BondLength) / 20;
				if (t < this.MIN_BOND_LENGTH) {
					var n = this.MIN_BOND_LENGTH / t;
					return n = Math.round(100 * n) / 100
				}
				return 1
			},
			e.prototype.initCDXMLs = function() {
				this.cdxmlMap = new Map,
				this.cdxmlMap.set("New Document", '<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE CDXML SYSTEM "http://www.cambridgesoft.com/xml/cdxml.dtd" >\n<CDXML\n CreationProgram="ChemDraw Web 2.0.0"\n Name="Document"\n BoundingBox="0 0 0 0"\n WindowPosition="0 0"\n WindowSize="0 0"\n FractionalWidths="yes"\n InterpretChemically="yes"\n ShowAtomQuery="yes"\n ShowAtomStereo="no"\n ShowAtomEnhancedStereo="yes"\n ShowAtomNumber="no"\n ShowResidueID="no"\n ShowBondQuery="yes"\n ShowBondRxn="yes"\n ShowBondStereo="no"\n ShowTerminalCarbonLabels="no"\n ShowNonTerminalCarbonLabels="no"\n HideImplicitHydrogens="no"\n LabelFont="3"\n LabelSize="10"\n LabelFace="96"\n CaptionFont="4"\n CaptionSize="12"\n HashSpacing="2.70"\n MarginWidth="2"\n LineWidth="1"\n BoldWidth="4"\n BondLength="30"\n BondSpacing="12"\n ChainAngle="120"\n LabelJustification="Auto"\n CaptionJustification="Left"\n AminoAcidTermini="HOH"\n ShowSequenceTermini="yes"\n ShowSequenceBonds="yes"\n ResidueWrapCount="40"\n ResidueBlockCount="10"\n ResidueZigZag="yes"\n NumberResidueBlocks="no"\n PrintMargins="36 36 36 36"\n MacPrintInfo="000300000258025800000000190D1357FFA9FFB21971139E0367052803FC000200000258025800000000190D1357000100640064000000010001010100000001270F000100010000000000000000000000000002001901900000000000600000000000000000000100000000000000000000000000000000"\n ChemPropName=""\n ChemPropFormula="Chemical Formula: "\n ChemPropExactMass="Exact Mass: "\n ChemPropMolWt="Molecular Weight: "\n ChemPropMOverZ="m/z: "\n ChemPropAnalysis="Elemental Analysis: "\n ChemPropBoilingPt="Boiling Point: "\n ChemPropMeltingPt="Melting Point: "\n ChemPropCritTemp="Critical Temp: "\n ChemPropCritPres="Critical Pres: "\n ChemPropCritVol="Critical Vol: "\n ChemPropGibbs="Gibbs Energy: "\n ChemPropLogP="Log P: "\n ChemPropMR="MR: "\n ChemPropHenry="Henry&apos;s Law: "\n ChemPropEForm="Heat of Form: "\n ChemProptPSA="tPSA: "\n ChemPropCLogP="CLogP: "\n ChemPropCMR="CMR: "\n ChemPropLogS="LogS: "\n ChemPropPKa="pKa: "\n ChemPropID=""\n color="0"\n bgcolor="1"\n RxnAutonumberStart="1"\n RxnAutonumberConditions="no"\n RxnAutonumberStyle="Roman"\n RxnAutonumberFormat="(#)"\n><colortable>\n<color r="1" g="1" b="1"/>\n<color r="0" g="0" b="0"/>\n<color r="1" g="0" b="0"/>\n<color r="1" g="1" b="0"/>\n<color r="0" g="1" b="0"/>\n<color r="0" g="1" b="1"/>\n<color r="0" g="0" b="1"/>\n<color r="1" g="0" b="1"/>\n</colortable><fonttable>\n<font id="3" charset="iso-8859-1" name="Arial"/>\n<font id="4" charset="iso-8859-1" name="Times New Roman"/>\n</fonttable><page\n id="3"\n BoundingBox="0 0 540 720"\n HeaderPosition="36"\n FooterPosition="36"\n PrintTrimMarks="yes"\n HeightPages="1"\n WidthPages="1"\n/></CDXML>'),
				this.cdxmlMap.set("ACS Document 1996", '<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE CDXML SYSTEM "http://www.cambridgesoft.com/xml/cdxml.dtd" >\n<CDXML\n CreationProgram="ChemDraw Web 2.0.0"\n Name="ACS Document 1996"\n BoundingBox="0 0 0 0"\n WindowPosition="0 0"\n WindowSize="0 0"\n FractionalWidths="yes"\n InterpretChemically="yes"\n ShowAtomQuery="yes"\n ShowAtomStereo="no"\n ShowAtomEnhancedStereo="yes"\n ShowAtomNumber="no"\n ShowResidueID="no"\n ShowBondQuery="yes"\n ShowBondRxn="yes"\n ShowBondStereo="no"\n ShowTerminalCarbonLabels="no"\n ShowNonTerminalCarbonLabels="no"\n HideImplicitHydrogens="no"\n LabelFont="3"\n LabelSize="10"\n LabelFace="96"\n CaptionFont="3"\n CaptionSize="10"\n HashSpacing="2.50"\n MarginWidth="1.60"\n LineWidth="0.60"\n BoldWidth="2"\n BondLength="14.40"\n BondSpacing="18"\n ChainAngle="120"\n LabelJustification="Auto"\n CaptionJustification="Left"\n AminoAcidTermini="HOH"\n ShowSequenceTermini="yes"\n ShowSequenceBonds="yes"\n ResidueWrapCount="40"\n ResidueBlockCount="10"\n ResidueZigZag="yes"\n NumberResidueBlocks="no"\n PrintMargins="36 36 36 36"\n MacPrintInfo="0003000001200120000000000B6608A0FF84FF880BE309180367052703FC0002000001200120000000000B6608A0000100640064000000010001010100000001270F000100010000000000000000000000000002001901900000000000600000000000000000000100000000000000000000000000000000"\n ChemPropName=""\n ChemPropFormula="Chemical Formula: "\n ChemPropExactMass="Exact Mass: "\n ChemPropMolWt="Molecular Weight: "\n ChemPropMOverZ="m/z: "\n ChemPropAnalysis="Elemental Analysis: "\n ChemPropBoilingPt="Boiling Point: "\n ChemPropMeltingPt="Melting Point: "\n ChemPropCritTemp="Critical Temp: "\n ChemPropCritPres="Critical Pres: "\n ChemPropCritVol="Critical Vol: "\n ChemPropGibbs="Gibbs Energy: "\n ChemPropLogP="Log P: "\n ChemPropMR="MR: "\n ChemPropHenry="Henry&apos;s Law: "\n ChemPropEForm="Heat of Form: "\n ChemProptPSA="tPSA: "\n ChemPropCLogP="CLogP: "\n ChemPropCMR="CMR: "\n ChemPropLogS="LogS: "\n ChemPropPKa="pKa: "\n ChemPropID=""\n color="0"\n bgcolor="1"\n RxnAutonumberStart="1"\n RxnAutonumberConditions="no"\n RxnAutonumberStyle="Roman"\n RxnAutonumberFormat="(#)"\n><colortable>\n<color r="1" g="1" b="1"/>\n<color r="0" g="0" b="0"/>\n<color r="1" g="0" b="0"/>\n<color r="1" g="1" b="0"/>\n<color r="0" g="1" b="0"/>\n<color r="0" g="1" b="1"/>\n<color r="0" g="0" b="1"/>\n<color r="1" g="0" b="1"/>\n</colortable><fonttable>\n<font id="3" charset="iso-8859-1" name="Arial"/>\n</fonttable><page\n id="6"\n BoundingBox="0 0 540 719.75"\n HeaderPosition="36"\n FooterPosition="36"\n PrintTrimMarks="yes"\n HeightPages="1"\n WidthPages="1"\n/></CDXML>')
			},
			e.prototype.getCDXMLForStyle = function(e) {
				var t = "";
				if (e) for (var n = e.toUpperCase(), o = this.cdxmlMap.keys(), r = o.next(); ! r.done; r = o.next()) if (r.value.toUpperCase() === n) {
					t = this.cdxmlMap.get(r.value);
					break
				}
				return t
			},
			e = Do([Object(de.injectable)(), _o(0, Object(de.inject)(Ce.InstanceHub)), To("design:paramtypes", [wt])], e)
		} (),
		Oo = n(433),
		Ao = function() {
			function e() {}
			return e.getAttr = function(e, t) {
				var n = e.attributes.getNamedItem(t);
				return n ? n.nodeValue: void 0
			},
			e.setAttr = function(e, t, n) {
				var o = e.attributes.getNamedItem(t);
				o && (o.nodeValue = n)
			},
			e
		} (),
		xo = function() {
			var e = this;
			this.getSoftware = function() {
				return e.software
			},
			this.setSoftware = function(t) {
				e.software = t
			},
			this.getVersion = function() {
				return e.version
			},
			this.setVersion = function(t) {
				e.version = t
			},
			this.getLicensee = function() {
				return e.licensee
			},
			this.setLicensee = function(t) {
				e.licensee = t
			},
			this.getExpirationDate = function() {
				return e.expirationDate
			},
			this.setExpirationDate = function(t) {
				e.expirationDate = t
			},
			this.getId = function() {
				return e.id
			},
			this.setId = function(t) {
				e.id = t
			},
			this.getComment = function() {
				return e.comment
			},
			this.setComment = function(t) {
				e.comment = t
			},
			this.getSignature = function() {
				return e.signature
			},
			this.setSignature = function(t) {
				e.signature = t
			},
			this.getValidFrom = function() {
				return e.validFrom
			},
			this.setValidFrom = function(t) {
				e.validFrom = t
			}
		},
		Io = function(e) {
			var t = this;
			this.parse = function() {
				var e = new xo,
				n = t.getLicenseNode(t.xml),
				o = Ao.getAttr(n, "Version");
				e.setVersion(o);
				for (var r = n.childNodes,
				i = 0,
				a = r.length; i < a; i++) {
					var s = r.item(i),
					c = s.nodeName.toLowerCase();
					"Field".toLowerCase() === c ? t.extractField(s, e) : "Signature".toLowerCase() === c && t.extractSignature(s, e)
				}
				return e
			},
			this.extractField = function(e, t) {
				var n = Ao.getAttr(e, "Name").toLowerCase(),
				o = Ao.getAttr(e, "Value");
				"Software".toLowerCase() === n ? t.setSoftware(o) : "Licensee".toLowerCase() === n ? t.setLicensee(o) : "Expiration Date".toLowerCase() === n ? t.setExpirationDate(o) : "ID".toLowerCase() === n ? t.setId(o) : "Comment".toLowerCase() === n ? t.setComment(o) : "Valid From".toLowerCase() === n && t.setValidFrom(o)
			},
			this.extractSignature = function(e, t) {
				var n = Ao.getAttr(e, "Value");
				t.setSignature(n)
			},
			this.getLicenseNode = function(e) {
				return e.getElementsByTagName("License").item(0)
			},
			this.xml = (new DOMParser).parseFromString(e, "text/xml")
		},
		Ho = function() {
			function e(t) {
				var n = this;
				this.validate = function() {
					return new Promise((function(e, t) {
						var o = new Io(n.licenseText).parse();
						n.verifySignature(o.getSignature()),
						n.verifyExpireDate(o.getExpirationDate()).then((function() {
							e(o)
						})).
						catch((function(e) {
							t(e)
						}))
					}))
				},
				this.verifySignature = function(t) {
					var o = n.cleanupLicense(n.licenseText),
					r = Oo.HmacSHA1(o, e.KEY);
					if (Oo.enc.Base64.stringify(r) !== t) throw new Error(e.INVALID_LICENSE_ERROR)
				},
				this.verifyExpireDate = function(t) {
					return new Promise((function(n, o) {
						if (void 0 !== t && e.LICENSE_UNLIMITED.toLowerCase() !== t.toLowerCase()) {
							var r = new Date(t);
							if ((new Date).getTime() - r.getTime() > e.ONE_DAY_MILLIS_TIME) throw new Error(e.LICENSE_EXPIRES_ERROR);
							var i = ke.a.join(ke.a.basePath, "clear.cache.gif");
							n(Ne.fetch(i, {
								headers: {
									pragma: "no-cache",
									"cache-control": "no-cache"
								}
							}).
							catch((function(e) {
								return e.response
							})).then((function(t) {
								if (null != t && new Date(t.headers.get("Date")).getTime() - r.getTime() > e.ONE_DAY_MILLIS_TIME) throw new Error(e.LICENSE_EXPIRES_ERROR)
							})))
						} else n()
					}))
				},
				this.cleanupLicense = function(t) {
					var n = t.replace(e.NEWLINE_PATTERN, "");
					return n = n.replace(e.SIGNATURE_TAG_PATTERN, "$1$3")
				},
				this.licenseText = t
			}
			return e.KEY = "ChemDraw Direct by PerkinElmer.",
			e.INVALID_LICENSE_ERROR = "License is not valid",
			e.LICENSE_EXPIRES_ERROR = "License has expired",
			e.NEWLINE_PATTERN = new RegExp("\\r?\\n", "g"),
			e.SIGNATURE_TAG_PATTERN = new RegExp('(<Signature\\s+Value=")(\\S*)("\\s*/>)'),
			e.LICENSE_UNLIMITED = "Unlimited",
			e.ONE_DAY_MILLIS_TIME = 864e5,
			e
		} (),
		Mo = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Ro = function() {
			function e() {
				var e = this;
				this.setLicenseText = function(t) {
					e.licenseText = t
				},
				this.setLicenseUrl = function(t) {
					e.licenseUrl = t
				},
				this.validateLicense = function() {
					return new Promise((function(t, n) {
						var o = location.hostname.split(".").slice( - 2).join(".");
						return t();
						wn.indexOf(o) >= 0 ? t() : e.licenseUrl ? e.retrieveLicense(e.licenseUrl, t, n) : e.licenseText ? e.validate(e.licenseText, t, n) : n(new Error("License file content or URL must be provided."))
					}))
				},
				this.getLicense = function() {
					return e.license
				},
				this.validate = function(t, n, o) {
					t ? new Ho(t).validate().then((function(t) {
						e.license = t,
						n(t)
					})).
					catch((function(e) {
						o(e)
					})) : o(new Error("License file is empty"))
				},
				this.retrieveLicense = function(t, n, o) {
					Ne.getWithCache(t).then((function(t) {
						e.validate(t, n, o)
					})).
					catch((function(e) {
						o(new Error("Failed to get license file. Reason: " + e.statusText + "."))
					}))
				}
			}
			return e = Mo([Object(de.injectable)()], e)
		} (),
		Lo = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		No = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		ko = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		jo = function() {
			function e(e) {
				var t = this;
				this.preSteps = [],
				this.postSteps = [],
				this.execute = function() {
					return t.preSteps = [t.instanceHub.licenseChecker, t.instanceHub.configurationLoader, t.instanceHub.webServiceConfigurator, t.instanceHub.chemDrawWebLoader],
					t.postSteps = [t.instanceHub.coreConfigurator, t.instanceHub.cddConfigurator, t.instanceHub.clipboardConfigurator],
					new Promise((function(e, n) {
						new be(t.preSteps).execute().then((function() {
							t.runPostSteps().then((function() {
								e()
							})).
							catch((function() {
								e()
							}))
						})).
						catch((function(e) {
							n(e)
						}))
					}))
				},
				this.runPostSteps = function() {
					return new Promise((function(e, n) {
						new be(t.postSteps).execute().then((function() {
							e()
						})).
						catch((function(e) {
							n(e)
						}))
					}))
				},
				this.instanceHub = e
			}
			return e = Lo([Object(de.injectable)(), ko(0, Object(de.inject)(Ce.InstanceHub)), No("design:paramtypes", [wt])], e)
		} (),
		Wo = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Fo = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Bo = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Uo = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return new Promise((function(e, n) {
						t.instanceHub.configurationManager.configuration.features.forEach((function(e, n) {
							t.configure(n.toString(), e)
						})),
						e()
					}))
				},
				this.instanceHub = e
			}
			return e.prototype.configure = function(e, t) {
				"ApplicationLogo" === e ? this.instanceHub.applicationLogoController.show(t) : "WebService" === e ? this.instanceHub.chemistryService.enable(t) : "ExtendedCopyPaste" === e && (this.instanceHub.clipboardManager.clipboardEventSource.enableFeature(t), this.instanceHub.clipboardIconController.show(t))
			},
			e = Wo([Object(de.injectable)(), Bo(0, Object(de.inject)(Ce.InstanceHub)), Fo("design:paramtypes", [wt])], e)
		} (),
		Vo = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		zo = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.getValue = function() {
					return t.checkBox.checked
				},
				t.setTips = function() {
					t.name = Kt.extendedClipboard instanceof ft ? "applet": "extension",
					t.tips = Kt.extensionIsAllowed() ? "If you don't want to run this kind of " + t.name + ", please uncheck this option.": "If you want to run this kind of " + t.name + " again, please check the option below."
				},
				t
			}
			return Vo(t, e),
			t.prototype.componentDidMount = function() {
				this.setTips()
			},
			t.prototype.componentDidUpdate = function() {
				this.setTips()
			},
			t.prototype.render = function() {
				var e = this;
				return r.createElement(S, null, r.createElement("div", null, this.tips), r.createElement("br", null), r.createElement(f.e, {
					inline: !0,
					className: "cdd-dialog-input",
					inputRef: function(t) {
						e.checkBox = t
					},
					defaultChecked: Kt.extensionIsAllowed()
				},
				"Allow " + this.name + " to run"))
			},
			t
		} (r.Component),
		Ko = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Go = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.onOK = function(e) {
					t.checkBox && Kt.allowExtension(t.props.instanceHub, t.checkBox.getValue()),
					t.hide(),
					e.stopPropagation()
				},
				t
			}
			return Ko(t, e),
			t.prototype.renderContent = function() {
				var e = this;
				return this.state.isShow && (this.instructionContents = dt.generateClipboardInstructionContents(), this.clipboardPermissionCheckBox = Kt.extendedClipboard ? r.createElement(zo, {
					ref: function(t) {
						e.checkBox = t
					}
				}) : void 0),
				r.createElement(C, {
					show: this.state.isShow,
					onHide: this.hide,
					container: this
				},
				this.instructionContents, this.clipboardPermissionCheckBox, r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onOK,
					bsClass: "cdd-button-ok"
				},
				"OK")))
			},
			t
		} (P),
		Xo = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Yo = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onClick = function() {
					n.props.instanceHub.dialogContainerController.show(r.createElement(Go, {
						instanceHub: n.props.instanceHub
					}))
				},
				n.state = {
					visible: !0,
					enable: !1,
					hasScroll: !1
				},
				n
			}
			return Xo(t, e),
			t.prototype.render = function() {
				var e = qt({
					CDW_ClipboardIcon: !0,
					"cdd-clipboard-icon": !0,
					"cdd-clipboard-icon-hidden": !this.state.visible,
					"cdd-clipboard-icon-has-scroll": this.state.hasScroll,
					"cdd-clipboard-icon-no-scroll": !this.state.hasScroll
				}),
				t = qt({
					"cdd-clipboard-icon-image": !0,
					"cdd-clipboard-icon-image-enabled": this.state.enable,
					"cdd-clipboard-icon-image-disabled": !this.state.enable
				});
				return r.createElement("div", {
					className: e,
					onClick: this.onClick
				},
				r.createElement("div", {
					className: t
				}))
			},
			t.prototype.enable = function() {
				this.setState({
					enable: !0
				})
			},
			t.prototype.disable = function() {
				this.setState({
					enable: !1
				})
			},
			t.prototype.show = function(e) {
				this.setState({
					visible: e
				})
			},
			t.prototype.dock = function(e) {
				this.setState({
					hasScroll: e
				})
			},
			t
		} (r.Component),
		qo = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Jo = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.state = {
					content: void 0
				},
				n
			}
			return qo(t, e),
			t.prototype.render = function() {
				var e = this;
				return r.createElement("div", {
					className: "cdd-dialog-container",
					ref: function(t) {
						e.container = t
					}
				},
				this.state.content || void 0)
			},
			t.prototype.show = function(e) {
				this.setState({
					content: e
				})
			},
			t.prototype.hide = function() {
				this.setState({
					content: void 0
				})
			},
			t
		} (r.Component),
		Zo = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Qo = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.state = {
					visible: !1,
					message: ""
				},
				n
			}
			return Zo(t, e),
			t.prototype.render = function() {
				var e = qt({
					"cdd-progress-indicator": !0,
					"cdd-progress-indicator-shown": this.state.visible,
					"cdd-progress-indicator-hidden": !this.state.visible
				});
				return r.createElement("div", {
					className: e
				},
				r.createElement("div", {
					className: "sk-three-bounce"
				},
				r.createElement("div", {
					className: "sk-child sk-bounce1"
				}), r.createElement("div", {
					className: "sk-child sk-bounce2"
				}), r.createElement("div", {
					className: "sk-child sk-bounce3"
				})), r.createElement("div", {
					className: "cdd-progress-indicator-message"
				},
				this.state.message || ""))
			},
			t.prototype.show = function(e) {
				this.setState({
					visible: !0,
					message: e
				})
			},
			t.prototype.hide = function() {
				this.setState({
					visible: !1,
					message: ""
				})
			},
			t
		} (r.Component),
		$o = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		er = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onKeyDown = function(e) {
					e.keyCode === g.ENTER && n.onOK()
				},
				n.onOK = function() {
					n.hide()
				},
				n
			}
			return $o(t, e),
			t.prototype.renderContent = function() {
				var e = ke.a.getAbsoluteUrl(this.props.instanceHub.configurationManager.configuration.appProperties.getRemoteChemistryServiceURL());
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.onOK,
					container: this,
					dialogClassName: "cdd-dialog-about",
					onKeyDown: this.onKeyDown
				},
				r.createElement(Ae, null, "About ChemDraw"), r.createElement(S, {
					className: "cdd-dialog-content"
				},
				r.createElement("div", {
					className: "cdd-dialog-table-row"
				},
				r.createElement(f.f, {
					className: "cdd-dialog-table-row-header"
				},
				"Version:"), r.createElement(f.f, {
					className: "cdd-dialog-table-row-data"
				},
				O.a.getAppVersion())), r.createElement("div", {
					className: "cdd-dialog-table-row"
				},
				r.createElement(f.f, {
					className: "cdd-dialog-table-row-header"
				},
				"Service URL:"), r.createElement(f.f, {
					className: "cdd-dialog-table-row-data"
				},
				r.createElement("a", {
					href: e,
					target: "_blank"
				},
				e)))), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onOK,
					bsClass: "cdd-button-ok"
				},
				"OK")))
			},
			t
		} (P),
		tr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		nr = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onClick = function() {
					n.props.instanceHub.dialogContainerController.show(r.createElement(er, {
						instanceHub: n.props.instanceHub
					}))
				},
				n.state = {
					visible: !0
				},
				n
			}
			return tr(t, e),
			t.prototype.render = function() {
				var e = qt({
					CDW_Logo: !0,
					"cdd-logo": !0,
					"cdd-logo-hidden": !this.state.visible
				});
				return r.createElement("div", {
					className: e,
					onClick: this.onClick
				})
			},
			t.prototype.show = function(e) {
				this.setState({
					visible: e
				})
			},
			t
		} (r.Component),
		or = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		rr = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.onCancel = function(e) {
					n.props.instanceHub.messagePresenterController.hide(),
					e.stopPropagation()
				},
				n.state = {
					level: fe.INFO,
					visible: !1,
					text: ""
				},
				n
			}
			return or(t, e),
			t.prototype.render = function() {
				var e;
				switch (this.state.level) {
				case fe.INFO:
					e = "info";
					break;
				case fe.WARN:
					e = "warning";
					break;
				case fe.ERROR:
					e = "danger";
					break;
				default:
					e = "info"
				}
				return r.createElement("div", {
					className: "cdd-message-presenter"
				},
				this.state.visible ? r.createElement("div", {
					className: "cdd-message"
				},
				r.createElement(f.a, {
					bsStyle: e,
					onDismiss: this.onCancel,
					className: "cdd-message-body"
				},
				r.createElement("span", null, this.state.text))) : null)
			},
			t.prototype.show = function(e, t) {
				this.setState({
					level: e,
					visible: !0,
					text: t
				})
			},
			t.prototype.hide = function() {
				this.setState({
					visible: !1,
					text: ""
				})
			},
			t
		} (r.Component),
		ir = n(457),
		ar = function() {
			function e(e, t) {
				this.width = e,
				this.height = t
			}
			return e.prototype.toString = function() {
				return "(width: " + this.width + ", height: " + this.height + ")"
			},
			e
		} (),
		sr = n(228),
		cr = function() {
			function e() {}
			return e.getEventKey = function(t) {
				var n = t.key;
				if (void 0 === n) if ((n = sr(t)).length > 1) n = n.charAt(0).toUpperCase() + n.slice(1);
				else if (t.shiftKey && 1 === n.length) {
					n = n.toUpperCase();
					var o = e.shiftedSymbols[n];
					o && (n = o)
				}
				return n
			},
			e.shiftedSymbols = {
				"`": "~",
				1 : "!",
				2 : "@",
				3 : "#",
				4 : "$",
				5 : "%",
				6 : "^",
				7 : "&",
				8 : "*",
				9 : "(",
				0 : ")",
				"-": "_",
				"=": "+",
				"[": "{",
				"]": "}",
				"\\": "|",
				";": ":",
				"'": '"',
				",": "<",
				".": ">",
				"/": "?"
			},
			e
		} (),
		lr = function() {
			function e(e) {
				this.isHandlingKeyEvent = !1,
				this.instanceHub = e
			}
			return e.prototype.handleModifierKeyChanged = function(e, t) {
				var n = A.getOSType() === p.Mac ? e.metaKey: e.ctrlKey;
				this.instanceHub.chemDraw.trackingSession ? this.instanceHub.chemDraw.trackingSession.handleKeyModifiersChanged(n, e.altKey, e.shiftKey) : a.TrackingSession.handleMouseMove(this.instanceHub.chemDraw.cdDoc, t, e.shiftKey, e.altKey, n),
				n && this.instanceHub.clipboardManager.setClipboardActive()
			},
			e.prototype.handleKeyEvent = function(e) {
				e.keyCode === g.UP_ARROW || e.keyCode === g.DOWN_ARROW || e.keyCode === g.LEFT_ARROW || e.keyCode === g.RIGHT_ARROW ? this.handleKeyEventAsync(e) : this.handleKeyEventSync(e)
			},
			e.prototype.doHandleKeyEvent = function(e) {
				var t = cr.getEventKey(e),
				n = A.getOSType() === p.Mac ? e.metaKey: e.ctrlKey;
				return this.instanceHub.chemDraw.cdDoc.handleKeyEvent(t, e.keyCode, n, e.shiftKey, e.altKey)
			},
			e.prototype.handleKeyEventSync = function(e) {
				var t = this;
				this.doHandleKeyEvent(e) && (e.preventDefault(), this.instanceHub.chemDraw.processChange().then((function() {
					t.handleHighlight()
				})))
			},
			e.prototype.handleKeyEventAsync = function(e) {
				var t = this;
				e.preventDefault(),
				this.isHandlingKeyEvent || (this.isHandlingKeyEvent = !0, window.setTimeout((function() {
					t.isHandlingKeyEvent = !1,
					window.clearTimeout(t.lastKeyEventTimeoutHandler),
					t.doHandleKeyEvent(e) && (t.instanceHub.chemDraw.redraw(), t.handleHighlight(), t.lastKeyEventTimeoutHandler = window.setTimeout((function() {
						t.instanceHub.chemDraw.processChange()
					}), 400))
				}), 20))
			},
			e.prototype.handleHighlight = function() {
				this.instanceHub.mouseEventSource.handlers.forEach((function(e) {
					e.refreshHighlight()
				}))
			},
			e
		} (),
		ur = function() {
			function e(e, t) {
				this.isDrawing = !1,
				this.needRedrawInDragging = !1,
				this.overlayCanvas = e,
				this.instanceHub = t
			}
			return e.prototype.updateHighlighting = function(e, t) {
				var n = this.instanceHub.chemDraw.cdDoc;
				if (e && t) {
					var o = A.getOSType() === p.Mac ? t.metaKey: t.ctrlKey;
					a.TrackingSession.handleMouseMove(n, e, t.shiftKey, t.altKey, o)
				} else a.TrackingSession.updateCursor(n)
			},
			e.prototype.handleMove = function(e, t) {
				this.isDrawing ? this.performWithTrackingPort((function() {})) : this.processMove(e, t)
			},
			e.prototype.handleSingleClick = function(e, t) {
				var n = this;
				this.performWithTrackingPort((function() {
					n.setTrackingStateForEvent(e, t),
					n.beginTracking(e, t, !1, 0),
					n.stopTracking()
				}))
			},
			e.prototype.handleDoubleClick = function(e, t) {
				var n = this;
				this.performWithTrackingPort((function() {
					n.setTrackingStateForEvent(e, t),
					n.beginTracking(e, t, !1, 1),
					n.stopTracking()
				}))
			},
			e.prototype.handleStartDrag = function(e, t) {
				this.processDrag(e, t, !0),
				this.needRedrawInDragging = this.isToolNeedsFullRedraw()
			},
			e.prototype.handleDrag = function(e, t) {
				var n = this,
				o = performance.now();
				this.dragUpdateTime = o,
				window.requestAnimationFrame((function() {
					n.dragUpdateTime === o && (n.processDrag(e, t, !1), n.needRedrawInDragging && n.instanceHub.chemDraw.redrawAsync())
				}))
			},
			e.prototype.handleStopDrag = function() {
				var e = this;
				this.dragUpdateTime = performance.now(),
				this.performWithTrackingPort((function() {
					e.stopTracking(!0)
				})),
				this.refreshHighlight()
			},
			e.prototype.stopTracking = function(e) {
				var t = this,
				n = this.instanceHub.chemDraw.trackingSession;
				return n && (this.instanceHub.chemDraw.trackingSession = null, n.end(), n.delete()),
				this.instanceHub.chemDraw.processChange(e).then((function() {
					t.isDrawing = !1
				}))
			},
			e.prototype.handleMouseDown = function(e, t) {
				a.TrackingState.setLeftMouseButtonDown(!0)
			},
			e.prototype.handleMouseUp = function(e, t) {
				a.TrackingState.setLeftMouseButtonDown(!1)
			},
			e.prototype.setTrackingStateForEvent = function(e, t) {
				var n = new a.CurPoint(e.x, e.y, 0);
				a.TrackingState.setMouseLocation(n),
				a.TrackingState.setShiftKeyDown(t.shiftKey),
				a.TrackingState.setControlKeyDown(t.ctrlKey),
				a.TrackingState.setAltKeyDown(t.altKey),
				a.TrackingState.setMetaKeyDown(t.metaKey),
				n.delete()
			},
			e.prototype.refreshHighlight = function(e) {
				var t = this;
				this.isDrawing || this.performWithTrackingPort((function() {
					e || a.TrackingSession.updateCursor(t.instanceHub.chemDraw.cdDoc)
				}))
			},
			e.prototype.beginTracking = function(e, t, n, o) {
				this.isDrawing = !0;
				var r = new a.CurPoint(e.x, e.y, 0),
				i = A.getOSType() === p.Mac ? t.metaKey: t.ctrlKey;
				this.instanceHub.chemDraw.trackingSession = a.TrackingSession.beginSession(this.instanceHub.chemDraw.cdDoc, r, o, t.shiftKey, t.altKey, i, n),
				this.instanceHub.chemDraw.redrawAsync()
			},
			e.prototype.performWithTrackingPort = function(e) {
				var t = this;
				this.performWithOverlayContext((function(n) {
					var o = t.instanceHub.chemDraw.cdDoc.getPort(),
					r = o.context,
					i = o.drawCallback;
					o.context = n,
					o.drawCallback = null,
					e && e(),
					o.context = r,
					o.drawCallback = i
				}))
			},
			e.prototype.processMove = function(e, t) {
				this.setTrackingStateForEvent(e, t),
				this.updateHighlighting(e, t)
			},
			e.prototype.performWithOverlayContext = function(e) {
				var t = this.instanceHub.chemDraw.getVisibleClientRect();
				t = t.grow(1);
				var n = this.overlayCanvas.getContext("2d");
				n.save(),
				n.clearRect(t.left, t.top, t.width, t.height),
				e && e(n),
				n.restore()
			},
			e.prototype.processDrag = function(e, t, n) {
				var o = this;
				this.performWithTrackingPort((function() {
					o.setTrackingStateForEvent(e, t),
					n && !o.instanceHub.chemDraw.trackingSession && o.beginTracking(e, t, !0, 0);
					var r = o.instanceHub.chemDraw.trackingSession;
					r && r.handleDrag(e)
				}))
			},
			e.prototype.isToolNeedsFullRedraw = function() {
				for (var e = this.instanceHub.chemDraw.cdDoc.toolbarModel,
				t = 0; t < e.numberOfItems; t++) {
					var n = e.itemAtIndex(t);
					if (n instanceof a.SelectableToolGroupModel) for (var o = 0; o < n.numberOfItems; o++) {
						var r = n.itemAtIndex(o);
						if ("chooseEdittingTool_Eraser" === r.command && r.isSelected) return ! 0
					} else if ("chooseEdittingTool_Eraser" === n.command && n.isSelected) return ! 0
				}
				return ! 1
			},
			e
		} (),
		pr = function(e, t, n, o, r) {
			this.invalidatedRects = [],
			this.canvas = e,
			this.context = e.getContext("2d"),
			this.bounds = new Xt(t, n, t + o, n + r)
		},
		dr = function() {
			function e(e) {
				this.tc = e
			}
			return Object.defineProperty(e.prototype, "direction", {
				set: function(e) {
					this.setProp("direction", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "fillStyle", {
				set: function(e) {
					this.setProp("fillStyle", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "font", {
				set: function(e) {
					this.setProp("font", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "globalAlpha", {
				set: function(e) {
					this.setProp("globalAlpha", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "globalCompositeOperation", {
				set: function(e) {
					this.setProp("globalCompositeOperation", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "imageSmoothingEnabled", {
				set: function(e) {
					this.setProp("imageSmoothingEnabled", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "lineCap", {
				set: function(e) {
					this.setProp("lineCap", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "lineDashOffset", {
				set: function(e) {
					this.setProp("lineDashOffset", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "lineJoin", {
				set: function(e) {
					this.setProp("lineJoin", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "lineWidth", {
				set: function(e) {
					this.setProp("lineWidth", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "miterLimit", {
				set: function(e) {
					this.setProp("miterLimit", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "msFillRule", {
				set: function(e) {
					this.setProp("msFillRule", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "msImageSmoothingEnabled", {
				set: function(e) {
					this.setProp("msImageSmoothingEnabled", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "imageSmoothingQuality", {
				set: function(e) {
					this.setProp("imageSmoothingQuality", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "shadowBlur", {
				set: function(e) {
					this.setProp("shadowBlur", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "shadowColor", {
				set: function(e) {
					this.setProp("shadowColor", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "shadowOffsetX", {
				set: function(e) {
					this.setProp("shadowOffsetX", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "shadowOffsetY", {
				set: function(e) {
					this.setProp("shadowOffsetY", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "strokeStyle", {
				set: function(e) {
					this.setProp("strokeStyle", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "textAlign", {
				set: function(e) {
					this.setProp("textAlign", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "textBaseline", {
				set: function(e) {
					this.setProp("textBaseline", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "mozImageSmoothingEnabled", {
				set: function(e) {
					this.setProp("mozImageSmoothingEnabled", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "webkitImageSmoothingEnabled", {
				set: function(e) {
					this.setProp("webkitImageSmoothingEnabled", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "oImageSmoothingEnabled", {
				set: function(e) {
					this.setProp("oImageSmoothingEnabled", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.arc = function(e, t, n, o, r, i) {
				this.exec("arc", arguments)
			},
			e.prototype.arcTo = function(e, t, n, o, r) {
				this.exec("arcTo", arguments)
			},
			e.prototype.bezierCurveTo = function(e, t, n, o, r, i) {
				this.exec("bezierCurveTo", arguments)
			},
			e.prototype.closePath = function() {
				this.exec("closePath", arguments)
			},
			e.prototype.ellipse = function(e, t, n, o, r, i, a, s) {
				this.exec("ellipse", arguments)
			},
			e.prototype.lineTo = function(e, t) {
				this.exec("lineTo", arguments)
			},
			e.prototype.moveTo = function(e, t) {
				this.exec("moveTo", arguments)
			},
			e.prototype.quadraticCurveTo = function(e, t, n, o) {
				this.exec("quadraticCurveTo", arguments)
			},
			e.prototype.rect = function(e, t, n, o) {
				this.exec("rect", arguments)
			},
			e.prototype.beginPath = function() {
				this.exec("beginPath", arguments)
			},
			e.prototype.clearRect = function(e, t, n, o) {
				this.exec("clearRect", arguments)
			},
			e.prototype.clip = function(e, t) {
				this.exec("clip", arguments)
			},
			e.prototype.createImageData = function(e, t) {
				return this.execOnFirst("createImageData", arguments)
			},
			e.prototype.createLinearGradient = function(e, t, n, o) {
				return this.execOnFirst("createLinearGradient", arguments)
			},
			e.prototype.createPattern = function(e, t) {
				return this.execOnFirst("createPattern", arguments)
			},
			e.prototype.createRadialGradient = function(e, t, n, o, r, i) {
				return this.execOnFirst("createRadialGradient", arguments)
			},
			e.prototype.drawFocusIfNeeded = function(e, t) {
				this.exec("drawFocusIfNeeded", arguments)
			},
			e.prototype.scrollPathIntoView = function(e) {
				this.exec("scrollPathInfoView", arguments)
			},
			e.prototype.drawImage = function(e, t, n, o, r, i, a, s, c) {
				this.exec("drawImage", arguments)
			},
			e.prototype.fill = function(e, t) {
				this.exec("fill", arguments)
			},
			e.prototype.fillRect = function(e, t, n, o) {
				this.exec("fillRect", arguments)
			},
			e.prototype.fillText = function(e, t, n, o) {
				this.exec("fillText", arguments)
			},
			e.prototype.getImageData = function(e, t, n, o) {
				return this.execOnFirst("getImageData", arguments)
			},
			e.prototype.getLineDash = function() {
				return this.execOnFirst("getLineDash", arguments)
			},
			e.prototype.isPointInPath = function(e, t, n, o) {
				return this.execOnFirst("isPointInPath", arguments)
			},
			e.prototype.isPointInStroke = function(e, t, n, o) {
				return this.execOnFirst("isPointInStroke", arguments)
			},
			e.prototype.measureText = function(e) {
				return this.execOnFirst("measureText", arguments)
			},
			e.prototype.putImageData = function(e, t, n, o, r, i, a) {
				this.exec("putImageData", arguments)
			},
			e.prototype.restore = function() {
				this.exec("restore", arguments)
			},
			e.prototype.rotate = function(e) {
				this.exec("rotate", arguments)
			},
			e.prototype.save = function() {
				this.exec("save", arguments)
			},
			e.prototype.scale = function(e, t) {
				this.exec("scale", arguments)
			},
			e.prototype.setLineDash = function(e) {
				this.exec("setLineDash", arguments)
			},
			e.prototype.getTransform = function() {
				return this.execOnFirst("getTransform", arguments)
			},
			e.prototype.resetTransform = function() {
				return this.exec("resetTransform", arguments)
			},
			e.prototype.setTransform = function(e, t, n, o, r, i) {
				this.exec("setTransform", arguments)
			},
			e.prototype.stroke = function() {
				this.exec("stroke", arguments)
			},
			e.prototype.strokeRect = function(e, t, n, o) {
				this.exec("strokeRect", arguments)
			},
			e.prototype.strokeText = function(e, t, n, o) {
				this.exec("strokeText", arguments)
			},
			e.prototype.transform = function(e, t, n, o, r, i) {
				this.exec("transform", arguments)
			},
			e.prototype.translate = function(e, t) {
				this.exec("translate", arguments)
			},
			Object.defineProperty(e.prototype, "filter", {
				set: function(e) {
					this.setProp("filter", e)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "tiles", {
				get: function() {
					return this.tc.tileList
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.setProp = function(e, t) {
				for (var n = 0,
				o = this.tiles; n < o.length; n++) {
					o[n].context[e] = t
				}
			},
			e.prototype.exec = function(e, t) {
				for (var n = 0,
				o = this.tiles; n < o.length; n++) {
					var r = o[n].context;
					r[e].apply(r, t)
				}
			},
			e.prototype.execOnFirst = function(e, t) {
				if (this.tiles.length > 0) {
					var n = this.tiles[0].context;
					return n[e].apply(n, t)
				}
			},
			e
		} (),
		hr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		fr = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.drawingRatio = 1,
				n.paddingSize = 1,
				n.tileWidth = n.props.tileSize,
				n.tileHeight = n.props.tileSize,
				n.tileList = [],
				n.sizeChangedListeners = [],
				n
			}
			return hr(t, e),
			t.prototype.getContext = function(e) {
				return void 0 === this.canvasContext && (1 === this.tileList.length ? this.canvasContext = this.tileList[0].context: this.canvasContext = new dr(this)),
				this.canvasContext
			},
			t.prototype.clear = function() {
				for (var e = this.container; e.hasChildNodes();) e.removeChild(e.lastChild);
				for (var t = 0,
				n = this.tileList; t < n.length; t++) {
					n[t].canvas.width = 0
				}
				this.tileList = []
			},
			t.prototype.setTileSize = function(e, t) {
				this.tileWidth = e,
				this.tileHeight = t
			},
			t.prototype.resize = function(e, t) {
				this.width = e,
				this.height = t,
				this.setContainerSize(e, t);
				for (var n = this.tileWidth - 2 * this.paddingSize,
				o = this.tileHeight - 2 * this.paddingSize,
				r = Math.floor(e / n), i = Math.floor(t / o), a = e % n, s = t % o, c = 0; c < i; c++) {
					for (var l = 0; l < r; l++) this.addTile(l * n, c * o, n, o);
					a > 0 && this.addTile(r * n, c * o, a, o)
				}
				if (s > 0) {
					for (var u = 0; u < r; u++) this.addTile(u * n, i * o, n, s);
					a > 0 && this.addTile(r * n, c * o, a, s)
				}
				this.canvasContext = void 0;
				for (var p = 0,
				d = this.sizeChangedListeners; p < d.length; p++) { (0, d[p])()
				}
			},
			t.prototype.addSizeChangedListener = function(e) {
				this.sizeChangedListeners.push(e)
			},
			t.prototype.setCssSize = function(e, t) {
				if (this.container.clientWidth !== e || this.container.clientHeight !== t) {
					this.setContainerSize(e, t);
					for (var n = e / this.width,
					o = t / this.height,
					r = 0,
					i = this.tileList; r < i.length; r++) {
						var a = i[r].canvas;
						a.style.width = a.width / this.drawingRatio * n + "px",
						a.style.height = a.height / this.drawingRatio * o + "px"
					}
				}
			},
			t.prototype.render = function() {
				var e = this,
				t = this.props.className;
				return r.createElement("div", {
					className: t,
					ref: function(t) {
						e.container = t
					}
				})
			},
			t.prototype.addTile = function(e, t, n, o) {
				var r = this.paddingSize;
				n += 2 * r,
				o += 2 * r,
				e -= r,
				t -= r;
				var i = document.createElement("canvas");
				i.classList.add("cdd-canvas-tile");
				var a = new pr(i, e, t, n, o);
				this.setupCanvas(a),
				this.tileList.push(a),
				this.container.appendChild(i)
			},
			t.prototype.setContainerSize = function(e, t) {
				this.container.style.width = e + "px",
				this.container.style.height = t + "px"
			},
			t.prototype.setupCanvas = function(e) {
				var t = e.canvas,
				n = e.bounds,
				o = n.width,
				r = n.height,
				i = n.left,
				a = n.top;
				t.style.left = i + "px",
				t.style.top = a + "px";
				var s, c = this.drawingRatio;
				1 !== c ? (t.width = o * c, t.height = r * c, t.style.width = o + "px", t.style.height = r + "px", (s = t.getContext("2d")).scale(c, c), s.translate( - i, -a)) : (t.width = o, t.height = r, t.style.width = "", t.style.height = "", (s = t.getContext("2d")).translate( - i, -a))
			},
			t
		} (r.Component),
		mr = n(300),
		gr = mr.import("attributors/style/font");
		gr.whitelist = null,
		mr.register(gr, !0);
		var br = mr.import("attributors/style/size");
		br.whitelist = null,
		mr.register(br, !0);
		var yr = mr.import("parchment"),
		Cr = new yr.Attributor.Attribute("pki-chemistry", "pki-chemistry", {
			scope: yr.Scope.INLINE
		});
		mr.register(Cr, !0);
		var vr, wr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Sr = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.isComposing = !1,
				n.handleMouseDown = function(e) {
					e.stopPropagation()
				},
				n.handleKeyDown = function(e) {
					n.onKeyDown && n.onKeyDown(e)
				},
				n.eventEmitter = new so,
				n
			}
			return wr(t, e),
			Object.defineProperty(t.prototype, "isEditing", {
				get: function() {
					return "block" === this.container.style.display
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.componentDidMount = function() {
				var e = this;
				this.customizeHistory();
				var t = this.getKeyBindings();
				this.quill = new mr(this.quillContainer, {
					formats: ["background", "bold", "color", "font", "italic", "size", "script", "underline", "align", "pki-chemistry"],
					modules: {
						keyboard: {
							bindings: t
						}
					}
				}),
				this.quill.on("text-change", (function(t, n, o) {
					if ("user" === o) {
						if (e.isComposing) return;
						e.onTextChange && e.onTextChange()
					}
				})),
				this.quill.on("selection-change", (function(t, n, o) {
					if ("user" === o) {
						if (e.isComposing) return;
						e.onSelectionChange && e.onSelectionChange(t, n)
					}
				})),
				this.quill.clipboard.addMatcher(Node.ELEMENT_NODE, (function(t, n) {
					var o = getComputedStyle(t),
					r = o.getPropertyValue("font-family"),
					i = r.split(/, */);
					i.length > 0 && (r = i[0]);
					var a = {
						font: r,
						size: o.getPropertyValue("font-size")
					},
					s = e.getTypingFormat();
					s["pki-chemistry"] && (a["pki-chemistry"] = s["pki-chemistry"]);
					var c = n.constructor;
					return n = n.compose((new c).retain(n.length(), a))
				})),
				this.handleCompositionEvent()
			},
			t.prototype.componentWillUnmount = function() {
				this.eventEmitter.emit("remove"),
				this.quill = null
			},
			t.prototype.dismiss = function() {
				this.onDismiss && this.onDismiss()
			},
			t.prototype.updatePositionForDynamicPage = function() {
				this.onUpdatePositionForDynamicPage && this.isEditing && this.onUpdatePositionForDynamicPage()
			},
			t.prototype.render = function() {
				var e = this;
				return r.createElement("div", {
					className: "cdd-text-editor",
					style: {
						display: "none"
					},
					ref: function(t) {
						e.container = t
					},
					onMouseDown: this.handleMouseDown,
					onKeyDown: this.handleKeyDown
				},
				r.createElement("div", {
					ref: function(t) {
						e.quillContainer = t
					}
				}))
			},
			t.prototype.handleCompositionEvent = function() {
				var e = this;
				this.container.addEventListener("compositionstart", (function() {
					e.isComposing = !0
				})),
				this.container.addEventListener("compositionend", (function() {
					e.isComposing = !1,
					e.onTextChange && e.onTextChange()
				}))
			},
			t.prototype.getKeyBindings = function() {
				var e = this,
				t = {};
				t.custom_enter = {
					key: g.ENTER,
					handler: function(e, t) {}
				};
				var n = function(t) {
					e.onShortcut && e.onShortcut(t)
				};
				if (A.isWindows()) t.custom_subscript = {
					key: g.F9,
					handler: function() {
						n("subscript")
					}
				},
				t.custom_superscript = {
					key: g.F10,
					handler: function() {
						n("superscript")
					}
				},
				t.custom_formula = {
					key: g.KEY_F,
					shortKey: !0,
					handler: function() {
						n("formula")
					}
				};
				else if (A.isMac()) {
					var o = A.isFirefox() ? 173 : g.DASH,
					r = A.isFirefox() ? 61 : g.EQUALS;
					t.custom_subscript = {
						key: o,
						shortKey: !0,
						handler: function() {
							n("subscript")
						}
					},
					t.custom_superscript = {
						key: r,
						shortKey: !0,
						handler: function() {
							n("superscript")
						}
					},
					t.custom_formula = {
						key: g.KEY_F,
						shortKey: !0,
						handler: function() {
							n("formula")
						}
					}
				}
				return t
			},
			t.prototype.customizeHistory = function() {
				var e = this;
				this.eventEmitter.on("remove", (function() {
					e = null
				}));
				var t = function(t) {
					function n() {
						return null !== t && t.apply(this, arguments) || this
					}
					return wr(n, t),
					n.prototype.undo = function() {
						e && e.onUndo && e.onUndo()
					},
					n.prototype.redo = function() {
						e && e.onRedo && e.onRedo()
					},
					n.prototype.record = function(e, t) {},
					n
				} (mr.import("modules/history"));
				mr.register("modules/history", t, !0)
			},
			t
		} (r.Component),
		Er = new(function() {
			function e() {}
			return e.prototype.getDrawingRatio = function(t, n) {
				var o = Math.max(window.devicePixelRatio || 1, 1);
				if (!this.needLimitMemory()) return o;
				var r = this.calcUsedMemory(),
				i = e.MAX_MEMORY - r,
				a = Math.sqrt(i / (t * n * 4)),
				s = Math.min(o, a);
				return s = Math.floor(2 * s) / 2
			},
			e.prototype.needLimitMemory = function() {
				return !! A.isSafari()
			},
			e.prototype.calcUsedMemory = function() {
				for (var e = 0,
				t = document.getElementsByTagName("canvas"), n = 0; n < t.length; n++) {
					var o = t[n];
					e += o.width * o.height * 4
				}
				return e
			},
			e.MAX_MEMORY = 2147483648,
			e
		} ()),
		Dr = function() {
			function e(e, t) {
				this.draw = function(e, t) {
					t.fillStyle = "#237E12",
					t.fillRect(e.left, e.top, e.width, e.height)
				},
				this.canvas = e,
				this.workspace = t
			}
			return e.prototype.track = function() {
				var e = this;
				this.attachScrollListener(),
				this.attachSizeChangedListener(),
				this.canvas.addSizeChangedListener((function() {
					e.invalidateAll()
				})),
				this.invalidateAll()
			},
			e.prototype.invalidateAll = function() {
				for (var e = 0,
				t = this.canvas.tileList; e < t.length; e++) {
					var n = t[e];
					n.invalidatedRects = [n.bounds]
				}
			},
			e.prototype.invalidateArea = function(e) {
				for (var t = 0,
				n = this.canvas.tileList; t < n.length; t++) {
					var o = n[t],
					r = Xt.intersection(o.bounds, e);
					r.isEmpty || o.invalidatedRects.push(r)
				}
			},
			e.prototype.renderVisible = function() {
				var t = this.workspace.getVisibleClientRect();
				t = t.grow(e.EXPANDING_SIZE),
				this.renderArea(t)
			},
			e.prototype.renderArea = function(e) {
				for (var t = function(e) {
					for (var t = e[0], n = 1; n < e.length; n++) t = Xt.union(t, e[n]);
					return t
				},
				n = 0, o = this.canvas.tileList; n < o.length; n++) {
					var r = o[n];
					if (r.invalidatedRects.length > 0 && r.bounds.isIntersecting(e)) {
						var i = t(r.invalidatedRects);
						this.render(r.context, i),
						r.invalidatedRects = []
					}
				}
			},
			e.prototype.render = function(e, t) {
				e.save(),
				e.beginPath(),
				e.rect(t.left, t.top, t.width, t.height),
				e.clip(),
				this.draw(t, e),
				e.restore()
			},
			e.prototype.attachScrollListener = function() {
				var e = this,
				t = !1;
				this.workspace.onScroll((function() {
					t || (t = !0, window.requestAnimationFrame((function() {
						t = !1,
						e.renderVisible()
					})))
				}))
			},
			e.prototype.attachSizeChangedListener = function() {
				var e = this,
				t = !1;
				this.workspace.onResize((function() {
					t || (t = !0, window.requestAnimationFrame((function() {
						t = !1,
						e.canvas.container && e.renderVisible()
					})))
				}))
			},
			e.EXPANDING_SIZE = 100,
			e
		} (),
		Tr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		_r = function(e) {
			function t(t) {
				var n, o, r = e.call(this, t) || this;
				return r.offset = 0,
				r.overlayCanvasX = 0,
				r.overlayCanvasY = 0,
				r.drawCallback = (n = !1, o = [],
				function(e) {
					o.push(e),
					n || (n = !0, window.requestAnimationFrame((function() {
						n = !1;
						for (var e = 0,
						t = o; e < t.length; e++) {
							var i = t[e],
							a = new Xt(i.left, i.top, i.right, i.bottom);
							r.tiledView.invalidateArea(a)
						}
						o = [],
						r.workspaceContainer && r.tiledView.renderVisible()
					})))
				}),
				r.instanceHub = r.props.instanceHub,
				r.chemDraw = r.instanceHub.chemDraw,
				r.chemDraw.getVisibleClientRect = r.getVisibleClientRect.bind(r),
				r.chemDraw.scrollClientRectToView = r.scrollClientRectToView.bind(r),
				r.chemDraw.newDocumentCallback = r.newDocumentCallback.bind(r),
				r.chemDraw.scaleChangedHandlerCallback = r.scaleChangedHandlerCallback.bind(r),
				r.chemDraw.sizeChangedHandlerCallback = r.sizeChangedHandlerCallback.bind(r),
				r.chemDraw.getContainerSize = r.getContainerSize.bind(r),
				r.chemDraw.drawDocument = r.drawDocument.bind(r),
				r.chemDraw.drawCallback = r.drawCallback.bind(r),
				r.chemDraw.resizeDocument = r.resizeDocument.bind(r),
				r.chemDraw.resizeDocumentAndCenter = r.resizeDocumentAndCenter.bind(r),
				r
			}
			return Tr(t, e),
			t.prototype.componentDidMount = function() {
				var e = this,
				t = {
					onResize: function(t) {
						e.instanceHub.eventEmitter.on("containerSizeChanged", t)
					},
					onScroll: function(t) {
						e.workspaceContainer.addEventListener("scroll", t)
					},
					getVisibleClientRect: function() {
						return e.getVisibleClientRect()
					}
				};
				this.tiledView = new Dr(this.documentCanvas, t),
				this.tiledView.draw = this.draw.bind(this),
				this.tiledView.track(),
				this.instanceHub.fileDropEventSource.registerEventOnElement(this.workspaceContainer);
				var n = this.instanceHub.mouseEventSource,
				o = new ur(this.overlayCanvas, this.instanceHub);
				n.registerEventOnElement(this.eventPanel),
				n.addHandler(o);
				var r = this.instanceHub.keyEventSource,
				i = new lr(this.instanceHub);
				r.registerEventOnElement(this.eventPanel),
				r.addHandler(i),
				this.trackActiveDocument(),
				this.instanceHub.clipboardManager.clipboardEventSource.registerOnElement(this.eventPanel);
				var a = this.instanceHub.eventEmitter;
				this.containerWidth = this.getContainerWidth(),
				this.containerHeight = this.getContainerHeight(),
				this.scrollbarWidth = this.getScrollbarWidth();
				var s = !1,
				c = function() {
					s || (s = !0, requestAnimationFrame((function() {
						if (s = !1, e.workspaceContainer) {
							var t = e.getContainerWidth(),
							n = e.getContainerHeight();
							t === e.containerWidth && n === e.containerHeight || (e.containerWidth = t, e.containerHeight = n, a.emit("containerSizeChanged"))
						}
					})))
				};
				window.addEventListener("resize", c),
				a.on("dispose", (function() {
					window.removeEventListener("resize", c)
				}));
				new ir.ResizeSensor(this.workspaceContainer, c);
				a.on("containerSizeChanged", (function() {
					e.workspaceContainer && e.handleWorkspaceSizeChanged()
				}));
				new ir.ResizeSensor(this.workspace, (function() {
					e.workspace && e.handleDrawingPanelSizeChanged()
				}));
				this.workspaceContainer.addEventListener("scroll", (function() {
					e.handleWorkspaceScroll(n, o)
				})),
				this.eventPanel.addEventListener("wheel", (function() {}))
			},
			t.prototype.resizeDocumentAndCenter = function() {
				var e = ao.PAGE_PADDING,
				t = this.chemDraw.cdDoc.contentBounds,
				n = this.getContainerSize(),
				o = Math.max(n.width, t.width + 2 * e),
				r = Math.max(n.height, t.height + 2 * e);
				this.updatePageSize(o, r),
				this.centerObjects()
			},
			t.prototype.fitToActualSize = function() {
				var e = this.chemDraw.cdDoc.getMutableMainPage(),
				t = e.curRect.width,
				n = e.curRect.height;
				this.setCanvasSize(t, n),
				this.chemDraw.redraw()
			},
			t.prototype.configureWorkspace = function(e) {
				var t = this.instanceHub.chemDrawWebLoader.getChemDrawComponent(),
				n = this.instanceHub.configurationManager.configuration.layout.getOrientation();
				n === xt.Vertical ? t.root.style.display = "flex": t.root.style.display = "block";
				var o = m.findDOMNode(this.instanceHub.toolbarContainerController.getToolbarContainer()),
				r = 0,
				i = 0;
				o && (r = this.instanceHub.chemDraw.isViewOnly ? 0 : o.getBoundingClientRect().height, i = this.instanceHub.chemDraw.isViewOnly ? 0 : o.getBoundingClientRect().width);
				var a = t.clipboardIconContainer;
				n === xt.Horizontal ? (this.workspaceContainer.style.width = "100%", this.workspaceContainer.style.height = "calc(100% - " + r + "px)", a.style.left = "0") : n === xt.Vertical ? (this.workspaceContainer.style.width = "calc(100% - " + i + "px)", this.workspaceContainer.style.height = "100%", a.style.left = i + "px") : (this.workspaceContainer.style.width = "auto", this.workspaceContainer.style.height = "auto", a.style.left = "0", a.style.top = "0", a.style.width = "auto", a.style.height = "100%"),
				this.instanceHub.chemDraw.cdDoc && !e && this.handleWorkspaceSizeChanged()
			},
			t.prototype.render = function() {
				var e = this;
				return r.createElement("div", {
					className: "cdd-workspace-container",
					ref: function(t) {
						e.workspaceContainer = t
					}
				},
				r.createElement("div", {
					className: "cdd-workspace",
					ref: function(t) {
						e.workspace = t
					}
				},
				r.createElement("div", {
					className: "cdd-drawing-panel",
					ref: function(t) {
						e.drawingPanel = t
					}
				},
				r.createElement(fr, {
					className: "cdd-canvas-document",
					tileSize: 1024,
					ref: function(t) {
						e.documentCanvas = t
					}
				}), r.createElement(fr, {
					className: "cdd-canvas-overlay",
					tileSize: 4096,
					ref: function(t) {
						e.overlayCanvas = t
					}
				}), r.createElement("div", {
					id: "CDW_GestureSourcePanel",
					className: "cdd-event-panel",
					tabIndex: 0,
					ref: function(t) {
						e.eventPanel = t
					}
				}), r.createElement(Sr, {
					ref: function(t) {
						e.bindTextEditor(t)
					}
				}))))
			},
			t.prototype.handleWorkspaceScroll = function(e, t) {
				if (!this.chemDraw.isViewOnly) {
					var n = this.getVisibleClientRect(),
					o = n.left - this.overlayCanvasX,
					r = n.top - this.overlayCanvasY,
					i = e.lastMouseLocation;
					void 0 !== i && (i.x += o, i.y += r, e.isDragging ? t.handleDrag(i, e.lastMouseMoveEvent) : t.handleMove(i, e.lastMouseMoveEvent)),
					this.setOverlayCanvasPosition(n)
				}
			},
			t.prototype.handleWorkspaceSizeChanged = function() {
				this.chemDraw.preservePageInfo || (this.resizeDocument(), this.chemDraw.redraw()),
				this.hideScrollBarIfNecessary(),
				this.overlayCanvas.clear(),
				this.resizeOverlayCanvas(),
				this.updateUI()
			},
			t.prototype.handleDrawingPanelSizeChanged = function() {
				this.hideScrollBarIfNecessary(),
				this.updateUI()
			},
			t.prototype.resizeDocument = function() {
				var e = ao.PAGE_PADDING,
				t = this.getContainerSize(),
				n = t.width,
				o = t.height,
				r = this.chemDraw.cdDoc,
				i = r.contentBounds,
				s = i.width > 0 || i.height > 0,
				c = 0,
				l = 0;
				if (s) {
					var u = this.workspaceContainer.scrollLeft,
					p = this.workspaceContainer.scrollTop;
					n = Math.max(n + u, i.right + e),
					o = Math.max(o + p, i.bottom + e),
					c = -Math.min(u, i.left - e),
					l = -Math.min(p, i.top - e),
					n += c,
					o += l
				}
				this.updatePageSize(n, o),
				0 === c && 0 === l || r.performWithUndoModified((function() {
					r.moveObjects(new a.CurPoint(c, l, 0))
				}))
			},
			t.prototype.handleScaleChangedForDynamicPage = function(e, t) {
				var n = ao.PAGE_PADDING,
				o = e.getMutableMainPage().getScale().internToCurPoint(t.center),
				r = e.contentBounds,
				i = this.getContainerSize(),
				s = new a.CurPoint(i.width / 2, i.height / 2, 0),
				c = s.x - o.x,
				l = s.y - o.y,
				u = new Xt(r.left + c, r.top + l, r.right + c, r.bottom + l);
				if (u.isEmpty || u.left > 0 && u.right < i.width && u.top > 0 && u.bottom < i.height) {
					e.performWithUndoModified((function() {
						e.moveObjects(new a.CurPoint(c, l, 0))
					})),
					this.updatePageSize(i.width, i.height) || this.setCanvasSize(i.width, i.height)
				} else {
					var p = Math.min(0, u.left),
					d = Math.max(i.width, u.right),
					h = Math.min(0, u.top),
					f = Math.max(i.height, u.bottom),
					m = p < 0 ? n: 0,
					g = h < 0 ? n: 0;
					e.performWithUndoModified((function() {
						e.moveObjects(new a.CurPoint(c - p + m, l - h + g, 0))
					}));
					var b = d - p + 2 * n,
					y = f - h + 2 * n;
					this.updatePageSize(b, y) || this.setCanvasSize(b, y);
					var C = -p + m,
					v = -h + g;
					if (!A.isChrome()) {
						var w = this.getVisibleClientRect();
						w.grow(Math.max(Math.abs(C), Math.abs(v))),
						this.tiledView.renderArea(w)
					}
					this.workspaceContainer.scrollLeft = C,
					this.workspaceContainer.scrollTop = v
				}
				this.instanceHub.textEditorController.getTextEditor().updatePositionForDynamicPage()
			},
			t.prototype.centerObjects = function() {
				var e = this.chemDraw.cdDoc,
				t = e.getMainPage().curRect,
				n = e.contentBounds,
				o = (t.left + t.right - (n.left + n.right)) / 2,
				r = (t.top + t.bottom - (n.top + n.bottom)) / 2;
				0 === o && 0 === r || (e.performWithUndoModified((function() {
					e.moveObjects(new a.CurPoint(o, r, 0))
				})), e.performWithUndoModified((function() {})))
			},
			t.prototype.trackActiveDocument = function() {
				var e = this,
				t = function() {
					e.chemDraw.isViewOnly || (c.activeInstanceHub = e.instanceHub)
				};
				this.eventPanel.addEventListener("mouseover", (function() {
					t()
				}), !0),
				this.eventPanel.addEventListener("mousedown", (function() {
					t()
				}), !0),
				this.eventPanel.addEventListener("keydown", (function() {
					t()
				}), !0)
			},
			t.prototype.drawDocument = function() {
				this.tiledView.invalidateAll(),
				this.tiledView.renderVisible()
			},
			t.prototype.draw = function(e, t) {
				var n = this.chemDraw.cdDoc,
				o = n.getPort(),
				r = o.drawCallback,
				i = o.context;
				o.drawCallback = null,
				o.context = t;
				var s = new a.DocumentRenderer(n),
				c = new a.CurRect(e.top, e.left, e.bottom, e.right);
				try {
					s.drawRect(c),
					o.validate()
				} finally {
					s.delete(),
					c.delete(),
					o.drawCallback = r,
					o.context = i
				}
			},
			t.prototype.newDocumentCallback = function(e, t, n) {
				var o = this,
				r = a.AlertDisplayService.getSharedService().preventAlert;
				a.AlertDisplayService.getSharedService().preventAlert = !this.chemDraw.preservePageInfo;
				this.updateUI();
				try {
					if (n = n || ye.a.CDXML, !t || !ye.a.IsChemDrawDocument(n)) {
						this.instanceHub.documentStyleManager.applyConfiguredStyle(e);
						var i = this.getContainerSize();
						this.updatePageSize(i.width, i.height)
					}
					if (t) {
						switch (n) {
						case ye.a.CDXML:
							a.ReadDocumentAPI.readCDXML(e, t);
							break;
						case ye.a.B64CDX:
							a.ReadDocumentAPI.readCDX(e, t);
							break;
						case ye.a.MOLFILE:
							a.ReadDocumentAPI.readMDLMolfile(e, t);
							break;
						case ye.a.SMILES:
							a.ReadDocumentAPI.readSMILES(e, t);
							break;
						default:
							throw new Error("Unsupported data format: " + n)
						}
						o.chemDraw.preservePageInfo ? o.fitToActualSize() : o.resizeDocumentAndCenter()
					}
				} catch(t) {
					var s = e.getMainPage().getScale(),
					l = s.curToInternDistance(this.getContainerWidth()),
					u = s.curToInternDistance(this.getContainerHeight()),
					p = new a.DocumentPosterSize(l, u);
					e.resize(p),
					p.delete();
					var d = Y.getException(t);
					throw d ? new Error(d.message + " (error code: " + d.errorCode + ")") : new Error(t)
				} finally {
					this.chemDraw.processChange(!0),
					this.resetUIState(),
					c.setInstanceHub(e, this.instanceHub),
					a.AlertDisplayService.getSharedService().preventAlert = r,
					e.markClean()
				}
			},
			t.prototype.resetUIState = function() {
				this.instanceHub.messagePresenterController.hide(),
				this.instanceHub.dialogContainerController.hide(),
				this.updateUI()
			},
			t.prototype.updateUI = function() {
				var e = this.workspaceContainer.scrollWidth > this.workspaceContainer.clientWidth;
				if (this.instanceHub.clipboardIconController.dock(e), this.instanceHub.toolbarContainerController.updateLayout(this.workspaceContainer.offsetWidth, this.workspaceContainer.offsetHeight), this.instanceHub.chemDrawWebLoader.getChemDrawComponent()) {
					var t = this.instanceHub.toolbarContainerController.getToolbarContainer().minWidth,
					n = this.instanceHub.configurationManager.configuration.layout.getOrientation(),
					o = this.instanceHub.chemDrawWebLoader.getChemDrawComponent();
					if (o) {
						var r = o.root;
						if (this.instanceHub.chemDraw.isViewOnly) r.style.minWidth = "auto",
						r.style.minHeight = "auto";
						else if (n === xt.Horizontal) {
							var i = 40;
							r.style.minWidth = t + i + "px",
							r.style.minHeight = "auto"
						} else if (n === xt.Vertical) {
							i = 60;
							r.style.minWidth = "auto",
							r.style.minHeight = t + i + "px"
						} else r.style.minWidth = "auto",
						r.style.minHeight = "auto";
						this.configureWorkspace(!0)
					}
				}
			},
			t.prototype.getVisibleClientRect = function() {
				var e = this.workspaceContainer.getBoundingClientRect(),
				t = this.drawingPanel.getBoundingClientRect(),
				n = Math.max(e.top - t.top, 0),
				o = Math.max(e.left - t.left, 0),
				r = n + Math.min(e.height, t.height),
				i = o + Math.min(e.width, t.width);
				return new Xt(o, n, i, r)
			},
			t.prototype.getScrollbarWidth = function() {
				if (A.isMac()) return 0;
				var e = document.createElement("div");
				e.style.visibility = "hidden",
				e.style.width = "50px",
				e.style.msOverflowStyle = "scrollbar",
				document.body.appendChild(e);
				var t = e.offsetWidth;
				e.style.overflow = "scroll";
				var n = document.createElement("div");
				n.style.width = "100%",
				e.appendChild(n);
				var o = n.offsetWidth;
				return e.parentNode.removeChild(e),
				t - o
			},
			t.prototype.scrollClientRectToView = function(e) {
				var t = this.getVisibleClientRect();
				e.height > t.height && e.width > t.width || (e.height > t.height && e.width < t.width ? this.workspaceContainer.scrollTop += e.top - t.top: e.height < t.height && e.width > t.width ? this.workspaceContainer.scrollLeft += e.left - t.left: (e.top < t.top ? this.workspaceContainer.scrollTop += e.top - t.top: e.bottom > t.bottom - this.scrollbarWidth && (this.workspaceContainer.scrollTop += e.bottom - t.bottom + this.scrollbarWidth), e.left < t.left ? this.workspaceContainer.scrollLeft += e.left - t.left: e.right > t.right - this.scrollbarWidth && (this.workspaceContainer.scrollLeft += e.right - t.right + this.scrollbarWidth)))
			},
			t.prototype.updatePageSize = function(e, t) {
				var n = this.chemDraw.cdDoc,
				o = n.getMutableMainPage(),
				r = o.getScale(),
				i = r.curToInternDistance(e),
				s = r.curToInternDistance(t);
				if (o.internRect.width === i && o.internRect.height === s) return ! 1;
				var c = new a.DocumentPosterSize(i, s);
				return n.resize(c),
				c.delete(),
				!0
			},
			t.prototype.setCanvasSize = function(e, t) {
				var n = this.documentCanvas,
				o = this.overlayCanvas;
				if (n.width !== e || n.height !== t) {
					n.clear(),
					o.clear();
					var r = Er.getDrawingRatio(2 * e, t);
					n.drawingRatio = r,
					o.drawingRatio = r,
					this.setDocumentCanvasTileSize(),
					n.resize(e, t),
					this.resizeOverlayCanvas(),
					this.eventPanel.style.width = e + "px",
					this.eventPanel.style.height = t + "px",
					this.setCanvasPosition(e, t)
				}
			},
			t.prototype.setDocumentCanvasTileSize = function() {
				var e = function(e) {
					var t = Math.max(e / 3, 256);
					e >= t && (e = t);
					for (var n = 256; n < e;) n *= 2;
					return n > 512 && (n = 512),
					n
				},
				t = e(this.getContainerWidth()),
				n = e(this.getContainerHeight());
				this.documentCanvas.setTileSize(t, n)
			},
			t.prototype.setCanvasCssSize = function(e, t) {
				this.documentCanvas.setCssSize(e, t),
				this.eventPanel.style.width = e + "px",
				this.eventPanel.style.height = t + "px",
				this.setCanvasPosition(e, t)
			},
			t.prototype.setCanvasPosition = function(e, t) {
				this.workspace.style.minWidth = e + "px",
				this.workspace.style.minHeight = t + "px",
				this.drawingPanel.style.width = e + 2 * this.offset + "px",
				this.drawingPanel.style.height = t + 2 * this.offset + "px",
				this.drawingPanel.style.marginLeft = -e / 2 + "px",
				this.drawingPanel.style.marginTop = -t / 2 + "px"
			},
			t.prototype.resizeOverlayCanvas = function() {
				var e = this.getVisibleClientRect();
				this.overlayCanvas.resize(e.width, e.height),
				this.overlayCanvasX = 0,
				this.overlayCanvasY = 0,
				this.setOverlayCanvasPosition(e)
			},
			t.prototype.setOverlayCanvasPosition = function(e) {
				var t = e.left,
				n = e.top,
				o = e.width,
				r = e.height,
				i = this.overlayCanvas.container.style;
				i.left = t + "px",
				i.top = n + "px";
				var a = this.overlayCanvasX - t,
				s = this.overlayCanvasY - n,
				c = this.overlayCanvas.getContext("2d");
				c.translate(a, s);
				var l = this.overlayCanvas.drawingRatio;
				if (o > 0 && r > 0 && l > 0) {
					var u = c.getImageData(0, 0, o * l, r * l);
					c.clearRect(t, n, o, r),
					c.putImageData(u, a * l, s * l)
				}
				this.overlayCanvasX = t,
				this.overlayCanvasY = n
			},
			t.prototype.getContainerWidth = function() {
				return this.workspaceContainer.getBoundingClientRect().width - 2 * this.offset
			},
			t.prototype.getContainerHeight = function() {
				return this.workspaceContainer.getBoundingClientRect().height - 2 * this.offset
			},
			t.prototype.getContainerSize = function() {
				var e = this.getContainerWidth(),
				t = this.getContainerHeight();
				return new ar(e, t)
			},
			t.prototype.scaleChangedHandlerCallback = function(e, t) {
				this.chemDraw.preservePageInfo ? this.handleScaleChangedForFixedPage(e, t) : this.handleScaleChangedForDynamicPage(e, t)
			},
			t.prototype.handleScaleChangedForFixedPage = function(e, t) {
				var n = e.getMutableMainPage().getScale().internToCurPoint(t.center),
				o = t.newContentSize.width,
				r = t.newContentSize.height,
				i = t.oldScale !== t.newScale;
				i && (this.setCanvasCssSize(o, r), this.setCanvasSize(o, r));
				var a = n.x - this.workspaceContainer.offsetWidth / 2,
				s = n.y - this.workspaceContainer.offsetHeight / 2;
				if (!A.isChrome()) {
					var c = this.getVisibleClientRect();
					c.grow(Math.max(Math.abs(a), Math.abs(s))),
					this.tiledView.renderArea(c)
				}
				i && this.chemDraw.redraw(),
				this.workspaceContainer.scrollLeft = a,
				this.workspaceContainer.scrollTop = s
			},
			t.prototype.hideScrollBarIfNecessary = function() {
				var e = this.workspaceContainer.style.overflow;
				this.workspaceContainer.style.overflow = "hidden";
				this.workspaceContainer.offsetWidth;
				this.workspaceContainer.style.overflow = e
			},
			t.prototype.sizeChangedHandlerCallback = function(e, t) {
				var n = t.newContentSize.width,
				o = t.newContentSize.height;
				this.setCanvasCssSize(n, o),
				this.setCanvasSize(n, o),
				this.chemDraw.redraw(),
				this.hideScrollBarIfNecessary()
			},
			t.prototype.bindTextEditor = function(e) {
				null !== e && this.instanceHub.textEditorController.bind(e)
			},
			t
		} (r.Component),
		Pr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Or = function() {
			return (Or = Object.assign ||
			function(e) {
				for (var t, n = 1,
				o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		Ar = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.rowCount = 0,
				n.bindButtonGroup = function(e) {
					if (null !== e) {
						var t = m.findDOMNode(e);
						t && (n.buttonToolbar = t)
					}
				},
				n.setGroupPresentTool = function(e, t) {
					for (var o = 0,
					r = n.chemDraw.toolsProps; o < r.length; o++) {
						var i = r[o];
						if (i === e) {
							i.tool = t;
							break
						}
					}
				},
				n.setSelectedTemplate = function(e, t) {
					for (var o = 0,
					r = n.chemDraw.toolsProps; o < r.length; o++) {
						var i = r[o];
						if (i === e) return i.selectedTemplate = t,
						void n.refresh()
					}
				},
				n.chemDraw = n.props.instanceHub.chemDraw,
				n.chemDraw.initToolbarCallback = n.initToolbarCallback.bind(n),
				n.chemDraw.checkToolStateCallback = n.checkToolStateCallback.bind(n),
				n.chemDraw.viewOnlyCallback = n.viewOnlyCallback.bind(n),
				n.state = {
					viewOnly: n.chemDraw.isViewOnly
				},
				n
			}
			return Pr(t, e),
			t.prototype.componentWillMount = function() {
				this.chemDraw.initToolbar(this.props.instanceHub.configurationManager.configuration, this.props.instanceHub.toolLibrary)
			},
			t.prototype.componentDidUpdate = function() {
				if (this.buttonToolbar) {
					var e = this.props.instanceHub.configurationManager.configuration.layout.getOrientation();
					e === xt.Horizontal ? (this.buttonToolbar.style.minWidth = this.minWidth + "px", this.buttonToolbar.style.minHeight = "100%") : e === xt.Vertical ? (this.buttonToolbar.style.minWidth = "100%", this.buttonToolbar.style.minHeight = this.minWidth + "px") : (this.buttonToolbar.style.minWidth = "auto", this.buttonToolbar.style.minHeight = "auto")
				}
			},
			t.prototype.refresh = function() {
				this.forceUpdate()
			},
			t.prototype.getWidth = function() {
				return this.props.instanceHub.configurationManager.configuration.layout.getOrientation() === xt.Horizontal ? this.maxWidth: this.maxHeight
			},
			t.prototype.getHeight = function() {
				return this.props.instanceHub.configurationManager.configuration.layout.getOrientation() === xt.Horizontal ? this.maxHeight: this.maxWidth
			},
			t.prototype.render = function() {
				var e = this,
				t = this.props.instanceHub.configurationManager.configuration.layout.getOrientation(),
				n = this.state.viewOnly ? "hidden": t === xt.Horizontal ? "horizontal": "vertical",
				o = t === xt.Horizontal ? "dock-top": "dock-left",
				i = [],
				a = [],
				s = function(e) {
					i.push(r.createElement(f.c, {
						vertical: t === xt.Horizontal,
						key: "toolbar_group_" + e
					},
					a)),
					a = []
				},
				c = 0;
				this.chemDraw.toolsProps.forEach((function(n) {
					if (a.length === e.rowCount && s(c++), n instanceof kn) {
						var o = n;
						if (o.collapseOption === Mt.Always || o.isCollapsed && o.collapseOption === Mt.Auto) {
							var i = "group_tool";
							o.subTools.forEach((function(e) {
								i += "_" + e.tool.name
							})),
							a.push(r.createElement(jn, Or({
								key: i + "_" + c++,
								toolbarOrientation: t,
								beforeSubToolClickHandled: function(t, n) {
									e.setGroupPresentTool(o, n.props.tool)
								},
								viewOnly: e.state.viewOnly
							},
							n)))
						} else o.subTools.forEach((function(t) {
							a.length === e.rowCount && s(c++),
							a.push(r.createElement(Rn, Or({
								key: "group_sub_tool_" + t.tool.name + "_" + c++,
								beforeClickHandled: function(n) {
									e.setGroupPresentTool(o, t.tool)
								}
							},
							t)))
						}))
					} else n instanceof eo ? a.push(r.createElement(to, Or({},
					n, {
						key: "single_tool_" + n.tool.name + "_" + c++,
						toolbarOrientation: t,
						beforeClickHandled: function(t) {
							e.setSelectedTemplate(n, t)
						},
						viewOnly: e.state.viewOnly
					}))) : a.push(r.createElement(Rn, Or({},
					n, {
						key: "single_tool_" + n.tool.name + "_" + c++
					})))
				})),
				0 !== a.length && s(c++);
				var l = {
					"cdd-toolbar-container": !0
				};
				l["cdd-toolbar-container-" + o] = !0,
				l["cdd-toolbar-container-" + n] = !0;
				var u = qt(l);
				return r.createElement("div", {
					id: "CDW_ToolBarContainer",
					className: u
				},
				r.createElement(f.d, {
					id: "CDW_ToolBar",
					className: t === xt.Vertical ? "cdd-toolbar cdd-toolbar-vertical": "cdd-toolbar",
					ref: function(t) {
						e.bindButtonGroup(t)
					}
				},
				r.createElement(f.c, {
					vertical: t === xt.Vertical
				},
				i)))
			},
			t.prototype.initToolbarCallback = function(e) {
				this.rowCount = e,
				this.calculateMaxToolbarSize(),
				this.refresh()
			},
			t.prototype.calculateMaxToolbarSize = function() {
				var e = 0,
				t = 0;
				this.chemDraw.toolsProps.map((function(n) {
					if (n instanceof kn) {
						var o = n;
						o.collapseOption === Mt.Always ? (e++, t++) : o.collapseOption === Mt.Auto ? (t++, o.subTools.map((function(t) {
							e++
						}))) : o.subTools.map((function(n) {
							e++,
							t++
						}))
					} else e++,
					t++
				}));
				var n = document.createElement("div");
				n.className = "cdd cddroot",
				n.style.width = "auto",
				n.style.height = "auto";
				var o = document.createElement("button");
				o.style.position = "relative",
				o.style.visibility = "hidden",
				o.className = "cdd-tool-button btn btn-default";
				var r = document.createElement("div");
				r.className = "cdd-tool-image",
				o.appendChild(r),
				n.appendChild(o),
				document.body.appendChild(n);
				var i = window.getComputedStyle(o),
				a = parseFloat(i.marginLeft.replace("px", "")),
				s = parseFloat(i.marginRight.replace("px", "")),
				c = parseFloat(i.marginTop.replace("px", "")),
				l = parseFloat(i.marginBottom.replace("px", "")),
				u = parseFloat(i.borderLeftWidth.replace("px", "")),
				p = o.clientWidth + a + s + 2 * u,
				d = o.clientHeight + c + l + 2 * u;
				this.maxWidth = (Math.ceil(e / this.rowCount) + 1) * p,
				this.maxHeight = d * this.rowCount,
				this.minWidth = Math.ceil(t / this.rowCount) * p,
				this.minHeight = d * this.rowCount,
				document.body.removeChild(n)
			},
			t.prototype.viewOnlyCallback = function(e) {
				this.setState({
					viewOnly: e
				}),
				this.props.instanceHub.chemDrawWebLoader.getChemDrawComponent().chemDrawPanel.configureWorkspace()
			},
			t.prototype.checkToolStateCallback = function() {
				this.refresh()
			},
			t
		} (r.Component),
		xr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Ir = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.mouseDown = function(e) {
					if (!n.props.instanceHub.chemDraw.isViewOnly) {
						var t = window.pageXOffset,
						o = window.pageYOffset,
						r = n.chemDrawPanel.eventPanel;
						"function" == typeof r.setActive ? r.setActive() : r.focus(),
						window.scrollTo(t, o),
						e.preventDefault()
					}
				},
				n
			}
			return xr(t, e),
			t.prototype.render = function() {
				var e = this;
				return r.createElement("div", {
					className: "cdd cddroot",
					onMouseDown: this.mouseDown,
					ref: function(t) {
						e.root = t
					}
				},
				r.createElement(Qo, {
					ref: function(t) {
						e.bindProgressIndicator(t)
					}
				}), r.createElement(rr, {
					instanceHub: this.props.instanceHub,
					ref: function(t) {
						e.bindMessagePresenter(t)
					}
				}), r.createElement("div", {
					className: "cdd-clipboard-icon-container",
					ref: function(t) {
						e.clipboardIconContainer = t
					}
				},
				r.createElement(Yo, {
					instanceHub: this.props.instanceHub,
					ref: function(t) {
						e.bindClipboardIcon(t)
					}
				})), r.createElement(nr, {
					instanceHub: this.props.instanceHub,
					ref: function(t) {
						e.bindApplicationLogo(t)
					}
				}), r.createElement(Jo, {
					ref: function(t) {
						e.bindDialogContainer(t)
					}
				}), r.createElement(Ar, {
					instanceHub: this.props.instanceHub,
					ref: function(t) {
						e.bindToolbarContainer(t)
					}
				}), r.createElement(_r, {
					instanceHub: this.props.instanceHub,
					ref: function(t) {
						e.chemDrawPanel = t,
						e.bindEventPanel(t ? t.eventPanel: null)
					}
				}))
			},
			t.prototype.bindProgressIndicator = function(e) {
				null !== e && this.props.instanceHub.progressIndicatorController.bind(e)
			},
			t.prototype.bindMessagePresenter = function(e) {
				null !== e && this.props.instanceHub.messagePresenterController.bind(e)
			},
			t.prototype.bindClipboardIcon = function(e) {
				null !== e && this.props.instanceHub.clipboardIconController.bind(e)
			},
			t.prototype.bindDialogContainer = function(e) {
				null !== e && this.props.instanceHub.dialogContainerController.bind(e)
			},
			t.prototype.bindEventPanel = function(e) {
				null !== e && this.props.instanceHub.eventPanelController.bind(e)
			},
			t.prototype.bindToolbarContainer = function(e) {
				null !== e && this.props.instanceHub.toolbarContainerController.bind(e)
			},
			t.prototype.bindApplicationLogo = function(e) {
				null !== e && this.props.instanceHub.applicationLogoController.bind(e)
			},
			t
		} (r.Component),
		Hr = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Mr = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Rr = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Lr = function() {
			function e(e) {
				var t = this;
				this.setContainer = function(e) {
					t.container = e
				},
				this.setCallback = function(e) {
					t.callback = e
				},
				this.setDocument = function(e, n) {
					t.data = e,
					t.dataFormat = n
				},
				this.execute = function() {
					var e = t;
					return new Promise((function(n, o) {
						if (t.container) {
							var i = r.createElement(Ir, {
								instanceHub: t.instanceHub
							});
							m.render(i, t.container, (function() {
								e.chemDraw = this,
								e.chemDraw.chemDrawPanel.configureWorkspace(),
								e.instanceHub.chemDraw.newDocument(e.data, e.dataFormat),
								null != e.callback && e.callback(),
								n()
							}))
						} else o("Could not mount ChemDraw without DOM element")
					}))
				},
				this.instanceHub = e
			}
			return e.prototype.getChemDrawComponent = function() {
				return this.chemDraw
			},
			e = Hr([Object(de.injectable)(), Rr(0, Object(de.inject)(Ce.InstanceHub)), Mr("design:paramtypes", [wt])], e)
		} (),
		Nr = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		kr = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		jr = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Wr = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return new Promise((function(e, n) {
						Kt.registerClipboardStorageChangedListener(t.instanceHub),
						t.instanceHub.chemDraw.isViewOnly ? (null !== Kt.getClipboardPermission() && (Kt.allowExtension(t.instanceHub, Kt.extensionIsAllowed()), t.instanceHub.chemDraw.isClipboardFirstLoadDone = !0), e()) : Kt.doFirstTime(t.instanceHub, (function() {
							t.instanceHub.chemDraw.isClipboardFirstLoadDone = !0,
							e()
						}))
					}))
				},
				this.instanceHub = e
			}
			return e = Nr([Object(de.injectable)(), jr(0, Object(de.inject)(Ce.InstanceHub)), kr("design:paramtypes", [wt])], e)
		} (),
		Fr = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Br = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Ur = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Vr = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return new Promise((function(e, n) {
						var o = ke.a.getVersionedUrl(ke.a.join(ke.a.basePath, "configuration.json"));
						t.setConfigByUrl(o, (function() {
							var o = t.instanceHub.configurationManager.getParams();
							o.configUrl ? t.setConfigByUrl(o.configUrl, e, n) : t.setConfigByObject(o.config, e, n)
						}), n)
					}))
				},
				this.setConfigByUrl = function(e, n, o) {
					t.instanceHub.configurationManager.updateConfigByUrl(e).then((function() {
						n()
					})).
					catch((function(e) {
						o(e)
					}))
				},
				this.setConfigByObject = function(e, n, o) {
					try {
						t.instanceHub.configurationManager.updateConfigObject(e),
						n()
					} catch(e) {
						o(e)
					}
				},
				this.instanceHub = e
			}
			return e = Fr([Object(de.injectable)(), Ur(0, Object(de.inject)(Ce.InstanceHub)), Br("design:paramtypes", [wt])], e)
		} (),
		zr = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Kr = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Gr = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Xr = "cddCorePreferencesChanged",
		Yr = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return new Promise((function(e, n) {
						t.instanceHub.configurationManager.configuration.features.forEach((function(e, n) {
							var o = t.getPreferenceKey(n.toString());
							o && a.setPreferenceValue(o, e)
						}));
						var o = document.createEvent("CustomEvent");
						o.initCustomEvent(Xr, !0, !1, !0),
						window.dispatchEvent(o),
						e()
					}))
				},
				this.getPreferenceKey = function(e) {
					switch (e) {
					case "ShowWarnValence":
						return a.PreferenceShowWarnValence;
					case "ShowWarnParens":
						return a.PreferenceShowWarnParens;
					case "ShowWarnIsotopes":
						return a.PreferenceShowWarnIsotopes;
					case "ShowWarnStrayBonds":
						return a.PreferenceShowWarnStrayBonds;
					case "ShowWarnStrayAtoms":
						return a.PreferenceShowWarnStrayAtoms;
					case "ShowWarnUndefinedStereo":
						return a.PreferenceShowWarnUndefinedStereo;
					case "ShowWarnAmbigStereo":
						return a.PreferenceShowWarnAmbigStereo;
					case "ShowWarnStereoBtw":
						return a.PreferenceShowWarnStereoBtw;
					case "ShowWarnLinearAtoms":
						return a.PreferenceShowWarnLinearAtoms;
					case "ShowWarnMisc":
						return a.PreferenceShowWarnMisc;
					case "AlwaysShowReactionMapping":
						return a.PreferenceShowReactionMap;
					case "AutomaticReactionMapping":
						return a.PreferenceAutoReactionMap;
					default:
						return
					}
				},
				this.instanceHub = e;
				var n = this,
				o = function() {
					n.instanceHub && n.instanceHub.chemDraw && t.instanceHub.chemDraw.redraw()
				};
				window.addEventListener(Xr, o),
				e.eventEmitter.on("dispose", (function() {
					window.removeEventListener(Xr, o)
				}))
			}
			return e = zr([Object(de.injectable)(), Gr(0, Object(de.inject)(Ce.InstanceHub)), Kr("design:paramtypes", [wt])], e)
		} (),
		qr = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Jr = function(e) {
			function t(t) {
				var n = e.call(this, t.message) || this;
				return n.name = "LicenseError",
				n
			}
			return qr(t, e),
			t
		} (Error),
		Zr = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Qr = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		$r = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ei = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return t.config(),
					new Promise((function(e, n) {
						t.instanceHub.licenseManager.validateLicense().then((function(t) {
							e()
						})).
						catch((function(e) {
							n(new Jr(e))
						}))
					}))
				},
				this.config = function() {
					var e = t.instanceHub.configurationManager.getParams();
					t.instanceHub.licenseManager.setLicenseText(e.license),
					t.instanceHub.licenseManager.setLicenseUrl(e.licenseUrl)
				},
				this.instanceHub = e
			}
			return e = Zr([Object(de.injectable)(), $r(0, Object(de.inject)(Ce.InstanceHub)), Qr("design:paramtypes", [wt])], e)
		} (),
		ti = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ni = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		oi = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ri = function() {
			function e(e) {
				var t = this;
				this.execute = function() {
					return new Promise((function(e, n) {
						var o = t.instanceHub.configurationManager.configuration.features,
						r = N.make("WebService"),
						i = o.get(r);
						void 0 !== i && t.instanceHub.chemistryService.enable(i),
						e()
					}))
				},
				this.instanceHub = e
			}
			return e = ti([Object(de.injectable)(), oi(0, Object(de.inject)(Ce.InstanceHub)), ni("design:paramtypes", [wt])], e)
		} (),
		ii = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ai = function() {
			function e() {}
			return e.prototype.bind = function(e) {
				this.icon = e
			},
			e.prototype.show = function(e) {
				this.icon.show(e)
			},
			e = ii([Object(de.injectable)()], e)
		} (),
		si = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ci = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		li = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ui = function() {
			function e(e) {
				this.instanceHub = e
			}
			return e.prototype.bind = function(e) {
				var t = this;
				this.icon = e;
				var n = function(e) { ! 0 === e.detail ? t.enable() : t.disable()
				};
				window.addEventListener("cdd_clipboard_icon_state", n),
				this.instanceHub.eventEmitter.on("dispose", (function() {
					window.removeEventListener("cdd_clipboard_icon_state", n)
				}))
			},
			e.prototype.enable = function() {
				this.icon && this.icon.enable()
			},
			e.prototype.disable = function() {
				this.icon && this.icon.disable()
			},
			e.prototype.dock = function(e) {
				this.icon && this.icon.dock(e)
			},
			e.prototype.show = function(e) {
				this.icon && this.icon.show(e)
			},
			e = si([Object(de.injectable)(), li(0, Object(de.inject)(Ce.InstanceHub)), ci("design:paramtypes", [wt])], e)
		} (),
		pi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		di = function() {
			function e() {}
			return e.prototype.bind = function(e) {
				this.dialog = e
			},
			e.prototype.show = function(e) {
				this.dialog && this.dialog.show(e)
			},
			e.prototype.hide = function() {
				this.dialog && this.dialog.hide()
			},
			e.prototype.isDialogType = function(e) {
				return ! (!this.dialog || !this.dialog.state.content) && this.dialog.state.content.type === e
			},
			e = pi([Object(de.injectable)()], e)
		} (),
		hi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		fi = function() {
			function e() {}
			return e.prototype.getEventPanel = function() {
				return this.eventPanel
			},
			e.prototype.bind = function(e) {
				this.eventPanel = e
			},
			e.prototype.setFocus = function() {
				if (this.eventPanel) if ("function" == typeof this.eventPanel.setActive) try {
					this.eventPanel.setActive()
				} catch(e) {
					this.eventPanel.focus()
				} else this.eventPanel.focus()
			},
			e.prototype.setCursorVisible = function(e) {
				this.eventPanel && (this.eventPanel.style.cursor = e ? "default": "none")
			},
			e.prototype.setCursorByID = function(e) {
				if (this.eventPanel) if (0 === e) this.eventPanel.style.cursor = "default";
				else {
					var t = ke.a.basePath + "/cursors/bin" + e + ".cur";
					this.eventPanel.style.cursor = "url(" + t + "), default"
				}
			},
			e = hi([Object(de.injectable)()], e)
		} (),
		mi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		gi = function() {
			function e() {
				this.showAttempts = 0
			}
			return e.prototype.bind = function(e) {
				this.indicator = e
			},
			e.prototype.show = function(e) {
				this.indicator && (this.showAttempts++, this.indicator.show(e))
			},
			e.prototype.hide = function() {
				this.indicator && (this.showAttempts > 0 && this.showAttempts--, 0 === this.showAttempts && this.indicator.hide())
			},
			e = mi([Object(de.injectable)()], e)
		} (),
		bi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		yi = function() {
			function e() {}
			return e.prototype.bind = function(e) {
				this.editor = e
			},
			e.prototype.getTextEditor = function() {
				return this.editor
			},
			e = bi([Object(de.injectable)()], e)
		} (),
		Ci = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		vi = function() {
			function e() {}
			return e.prototype.bind = function(e) {
				this.toolbarContainer = e
			},
			e.prototype.updateLayout = function(e, t) {
				for (var n = this.toolbarContainer.getWidth() >= e || this.toolbarContainer.getHeight() >= t, o = 0, r = this.toolbarContainer.chemDraw.toolsProps; o < r.length; o++) {
					var i = r[o];
					if (i instanceof kn) i.isCollapsed = n
				}
				this.toolbarContainer.refresh()
			},
			e.prototype.getToolbarContainer = function() {
				return this.toolbarContainer
			},
			e = Ci([Object(de.injectable)()], e)
		} (),
		wi = n(462),
		Si = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (); !
		function(e) {
			e[e.REPLACE = 0] = "REPLACE",
			e[e.INSERT = 1] = "INSERT",
			e[e.CANCEL = 2] = "CANCEL"
		} (vr || (vr = {}));
		var Ei = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.onReplace = function(e) {
					t.props.onReturn(vr.REPLACE),
					t.hide(),
					e.stopPropagation()
				},
				t.onInsert = function(e) {
					t.props.onReturn(vr.INSERT),
					t.hide(),
					e.stopPropagation()
				},
				t.onCancel = function(e) {
					t.props.onReturn(vr.CANCEL),
					t.hide(),
					e.stopPropagation()
				},
				t
			}
			return Si(t, e),
			t.prototype.renderContent = function() {
				return r.createElement(C, {
					show: this.state.isShow,
					onHide: this.hide,
					container: this,
					dialogClassName: "cdd-dialog-guide"
				},
				r.createElement(S, null, "Do you want to replace your current document or add the file contents to it?"), r.createElement(T, null, r.createElement(f.b, {
					onClick: this.onReplace,
					bsClass: "cdd-button-danger"
				},
				"Replace"), r.createElement(f.b, {
					onClick: this.onInsert,
					bsClass: "cdd-button-ok"
				},
				"Insert"), r.createElement(f.b, {
					onClick: this.onCancel,
					bsClass: "cdd-button-cancel"
				},
				"Cancel")))
			},
			t
		} (P),
		Di = function() {
			function e(e) {
				this.actionType = vr.REPLACE,
				this.instanceHub = e
			}
			return e.prototype.getExtension = function(e) {
				if (!e) throw new Error("Can't read this file.");
				var t = e.name,
				n = t.lastIndexOf(".");
				if ( - 1 === n) throw new Error("File does not have an extension: " + t);
				return t.substring(n + 1)
			},
			e.prototype.askForDiscard = function() {
				var e = this;
				return new Promise((function(t, n) {
					if (e.instanceHub.chemDraw.cdDoc.isEmpty()) e.actionType = vr.REPLACE,
					t();
					else {
						var o = r.createElement(Ei, {
							onReturn: function(o) {
								e.actionType = o,
								o === vr.CANCEL ? n() : t()
							}
						});
						e.instanceHub.dialogContainerController.show(o)
					}
				}))
			},
			e.prototype.handle = function(e) {
				var t = wi.convert(new Uint8Array(e), "UTF8"),
				n = re.fromByteArray(t);
				this.readToDocument(n)
			},
			e.prototype.readToDocument = function(e) {
				var t = this.getType();
				try {
					this.actionType === vr.REPLACE ? a.ReadDocumentAPI.replaceFrom(this.instanceHub.chemDraw.cdDoc, e, t) : this.actionType === vr.INSERT && a.ReadDocumentAPI.insertFrom(this.instanceHub.chemDraw.cdDoc, e, t),
					this.instanceHub.chemDraw.preservePageInfo ? this.instanceHub.chemDrawWebLoader.getChemDrawComponent().chemDrawPanel.fitToActualSize() : this.instanceHub.chemDrawWebLoader.getChemDrawComponent().chemDrawPanel.resizeDocumentAndCenter()
				} catch(e) {
					var n = Y.getException(e);
					throw n ? new Error(n.message + " (error code: " + n.errorCode + ")") : new Error(e)
				} finally {
					this.instanceHub.chemDraw.processChange(!0)
				}
			},
			e
		} (),
		Ti = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		_i = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ti(t, e),
			t.prototype.canHandle = function(e) {
				return "cdx" === this.getExtension(e).toLocaleLowerCase()
			},
			t.prototype.getType = function() {
				return "chemical/x-cdx"
			},
			t.prototype.handle = function(e) {
				var t = new Uint8Array(e),
				n = mt.fromByteArray(t);
				this.readToDocument(n)
			},
			t
		} (Di),
		Pi = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Oi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Pi(t, e),
			t.prototype.canHandle = function(e) {
				return "cdxml" === this.getExtension(e).toLocaleLowerCase()
			},
			t.prototype.getType = function() {
				return "chemical/x-cdxml"
			},
			t
		} (Di),
		Ai = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		xi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ai(t, e),
			t.prototype.canHandle = function(e) {
				return "mol" === this.getExtension(e).toLocaleLowerCase()
			},
			t.prototype.getType = function() {
				return "chemical/x-mdl-molfile"
			},
			t
		} (Di),
		Ii = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Hi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ii(t, e),
			t.prototype.canHandle = function(e) {
				var t = this.getExtension(e).toLocaleLowerCase();
				return "smi" === t || "smiles" === t
			},
			t.prototype.getType = function() {
				return "chemical/x-daylight-smiles"
			},
			t
		} (Di),
		Mi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Ri = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Li = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Ni = function() {
			function e(e) {
				var t = this;
				// ---start---处理 Files
				var kt8bmzzv_resolve;
				window.kt8aqig7_processFiles = function (...args) {
					return new Promise(function (resolve) {
						t.processFiles.apply(t, args);
						kt8bmzzv_resolve = resolve;
					})
				};
				// ---end---处理 Files
				this.handlers = [],
				this.onLoadStart = function(e) {
					t.instanceHub.progressIndicatorController.show()
				},
				this.onLoadEnd = function(e) {
					var n = t.fileReader.result;
					if (void 0 !== n) try {
						for (var o = 0,
						r = t.handlers; o < r.length; o++) {
							var i = r[o];
							if (i.canHandle(t.currentFile)) {
								i.handle(n);
								break
							}
						}
					} catch(e) {
						e && e.message && t.showError(e.message)
					} finally {
						t.instanceHub.progressIndicatorController.hide()
					}
					
					// 文件处理结束
					kt8bmzzv_resolve && kt8bmzzv_resolve();
				},
				this.onProgress = function(e) {},
				this.onError = function(e) {
					t.instanceHub.progressIndicatorController.hide(),
					t.showError(e.message || "Failed to read file " + t.currentFile.name),
					t.currentFile = null
				},
				this.onDragEnter = function(e) {
					e.stopPropagation(),
					e.preventDefault()
				},
				this.onDragOver = function(e) {
					e.stopPropagation(),
					e.preventDefault();
					for (var t = 0,
					n = e.dataTransfer.types; t < n.length; t++) {
						if ("Files" === n[t]) return e.dataTransfer.dropEffect = "copy",
						void(e.dataTransfer.effectAllowed = "copy")
					}
					e.dataTransfer.dropEffect = "none",
					e.dataTransfer.effectAllowed = "none"
				},
				this.onDragLeave = function(e) {
					e.stopPropagation(),
					e.preventDefault()
				},
				this.onDrop = function(e) {
					e.stopPropagation(),
					e.preventDefault();
					var n = e.dataTransfer.files;
					n.length > 0 && !t.instanceHub.chemDraw.isViewOnly && t.processFiles(n)
				},
				this.instanceHub = e,
				this.fileReader = this.createFileReader(),
				this.addHandler(new Hi(e)),
				this.addHandler(new xi(e)),
				this.addHandler(new Oi(e)),
				this.addHandler(new _i(e))
			}
			return e.prototype.addHandler = function(e) {
				this.handlers.push(e)
			},
			e.prototype.registerEventOnElement = function(e) {
				e.addEventListener("dragenter", this.onDragEnter),
				e.addEventListener("dragover", this.onDragOver),
				e.addEventListener("dragleave", this.onDragLeave),
				e.addEventListener("drop", this.onDrop)
			},
			e.prototype.createFileReader = function() {
				var e = new FileReader;
				return e.addEventListener("loadstart", this.onLoadStart),
				e.addEventListener("loadend", this.onLoadEnd),
				e.addEventListener("progress", this.onProgress),
				e.addEventListener("error", this.onError),
				e
			},
			e.prototype.processFiles = function(e) {
				var t = this;
				if (this.fileReader.readyState === this.fileReader.LOADING && this.fileReader.abort(), this.currentFile = e.item(0), 0 !== this.currentFile.size) {
					var n = !1;
					try {
						for (var o = 0,
						r = this.handlers; o < r.length; o++) {
							var i = r[o];
							if (i.canHandle(this.currentFile)) {
								n = !0,
								i.askForDiscard().then((function() {
									t.fileReader.readAsArrayBuffer(t.currentFile)
								})).
								catch((function() {}));
								break
							}
						}
					} catch(e) {
						return void this.showError(e.message)
					}
					n || this.showError("Not supported file: " + this.currentFile.name)
				} else this.showError("Cannot read directory or empty file: " + this.currentFile.name)
			},
			e.prototype.showError = function(e) {
				this.instanceHub.messagePresenterController.error(e)
			},
			e = Mi([Object(de.injectable)(), Li(0, Object(de.inject)(Ce.InstanceHub)), Ri("design:paramtypes", [wt])], e)
		} (),
		ki = n(463),
		ji = function() {
			function e(e, t) {
				this.x = e,
				this.y = t
			}
			return e.prototype.equals = function(e) {
				return !! e && (this.x === e.x && this.y === e.y)
			},
			e.prototype.toString = function() {
				return "(" + this.x + ", " + this.y + ")"
			},
			e
		} (),
		Wi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Fi = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Bi = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Ui = function() {
			function e(e) {
				this.handlers = [],
				this.instanceHub = e
			}
			return e.prototype.addHandler = function(e) {
				this.handlers.push(e)
			},
			e.prototype.clearHandlers = function() {
				this.handlers = []
			},
			e.prototype.handleModifierKeyChanged = function(e) {
				var t = this.instanceHub.mouseEventSource.lastMouseLocation || new ji( - 1, -1);
				this.handlers.forEach((function(n) {
					n.handleModifierKeyChanged(e, t)
				}))
			},
			e.prototype.handleKeyEvent = function(e) {
				this.handlers.forEach((function(t) {
					t.handleKeyEvent(e)
				}))
			},
			e = Wi([Object(de.injectable)(), Bi(0, Object(de.inject)(Ce.InstanceHub)), Fi("design:paramtypes", [wt])], e)
		} (),
		Vi = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		zi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Ki = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		Gi = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		Xi = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.commands = new Map,
				ki.addKeycodes({
					173 : "-"
				}),
				n
			}
			return Vi(t, e),
			t.prototype.registerEventOnElement = function(e) {
				this.element = e,
				this.mousetrap = ki(e),
				this.registerModifierKeys(),
				this.registerCommandShortcuts(),
				this.registerOtherKeys()
			},
			t.prototype.registerCommand = function(e, t) {
				var n = this;
				this.commands.set(e, t),
				this.mousetrap.bind(e, (function() {
					return n.dispatchCommandForKeys(e),
					!1
				}))
			},
			t.prototype.dispatchCommandForKeys = function(e) {
				if (this.isEditMode() && !this.isMouseDragging()) {
					var t = this.commands.get(e),
					n = this.instanceHub.commandLibrary.getCommandWithName(t);
					n.isEnabled && n.execute()
				}
			},
			t.prototype.unregisterCommands = function() {
				var e = this;
				this.commands.forEach((function(t, n) {
					e.mousetrap.unbind(n)
				})),
				this.commands.clear()
			},
			t.prototype.registerModifierKeys = function() {
				var e = this;
				this.mousetrap.bind(["shift", "alt", "mod"], (function(t) {
					if (e.isEditMode()) return t.repeat || e.handleModifierKeyChanged(t),
					!1
				}), "keydown"),
				this.mousetrap.bind(["shift", "alt", "mod"], (function(t) {
					if (e.isEditMode()) return e.handleModifierKeyChanged(t),
					!1
				}), "keyup")
			},
			t.prototype.registerOtherKeys = function() {
				var e = this;
				this.element.addEventListener("keydown", (function(t) {
					e.isEditMode() && !e.isMouseDragging() && e.handleKeyEvent(t)
				}))
			},
			t.prototype.registerCommandShortcuts = function() {
				this.instanceHub.commandLibrary;
				this.registerCommand("mod+c", "copy"),
				this.registerCommand("mod+x", "cut"),
				A.isIE() && this.registerCommand("mod+v", "paste"),
				this.registerCommand("mod+a", "selectAll"),
				this.registerCommand("mod+z", "undo"),
				this.registerCommand("mod+shift+z", "redo"),
				this.registerCommand("mod+g", "group"),
				this.registerCommand("mod+shift+g", "ungroup"),
				this.registerCommand("mod+j", "joinObjectToGroup"),
				this.registerCommand("mod+shift+h", "flipObjectsHorizontal"),
				this.registerCommand("mod+shift+v", "flipObjectsVertical"),
				this.registerCommand("mod+alt+shift+h", "rotateObjects180Horizontal"),
				this.registerCommand("mod+alt+shift+v", "rotateObjects180Vertical"),
				this.registerCommand("mod+shift+k", "cleanStructure"),
				this.registerCommand("mod+shift+x", "cleanReaction"),
				this.registerCommand("mod+l", "toggleFixedBondLengths"),
				this.registerCommand("mod+e", "toggleFixedBondAngles"),
				A.isWindows() ? (this.registerCommand("f9", "textStyleSubscript"), this.registerCommand("f10", "textStyleSuperscript"), this.registerCommand("mod+f", "textStyleFormula")) : A.isMac() && (this.registerCommand("mod+-", "textStyleSubscript"), this.registerCommand("mod+=", "textStyleSuperscript"), this.registerCommand("mod+f", "textStyleFormula")),
				this.registerCommand("mod+shift+n", "convertNameToStructure"),
				this.registerCommand("mod+alt+n", "convertStructureToName")
			},
			t.prototype.isEditMode = function() {
				return ! this.instanceHub.chemDraw.isViewOnly
			},
			t.prototype.isMouseDragging = function() {
				return this.instanceHub.mouseEventSource.isDragging
			},
			t = zi([Object(de.injectable)(), Gi(0, Object(de.inject)(Ce.InstanceHub)), Ki("design:paramtypes", [wt])], t)
		} (Ui),
		Yi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		qi = function() {
			function e() {
				var e = this;
				this.isDown = !1,
				this.isDragging = !1,
				this.clickCount = 0,
				this.handlers = [],
				this.mouseDragUpAction = function(t) {
					e.handleMouseUp(e.locationInElementFromEvent(t), t),
					window.removeEventListener("mousemove", e.mouseDragMoveAction, !0),
					window.removeEventListener("mouseup", e.mouseDragUpAction, !0),
					setTimeout((function() {
						window.removeEventListener("click", e.mouseDragUpOutOfCanvasAction, !0)
					}), 0),
					e.handleStopDrag(),
					e.clickCount = 0,
					e.isDown = !1,
					e.isDragging = !1
				},
				this.mouseDragMoveAction = function(t) {
					e.handleDrag(e.locationInElementFromEvent(t), t)
				}
			}
			var t;
			return t = e,
			e.prototype.addHandler = function(e) {
				this.handlers.push(e)
			},
			e.prototype.locationInElementFromEvent = function(e) {
				var t = this.element.getBoundingClientRect();
				return new ji(e.clientX - t.left, e.clientY - t.top)
			},
			e.prototype.triggerMouseUp = function(e) {
				var n = this;
				if (!this.isDragging) {
					if (this.clickCount > 0) {
						var o = Date.now(),
						r = this.locationInElementFromEvent(e);
						this.handleMouseUp(r, e),
						o - this.lastMouseDownTime > t.DOUBLE_CLICK_INTERVAL ? (this.handleSingleClick(r, e), this.clickCount = 0) : (this.timeoutAction = function() {
							1 === n.clickCount ? n.handleSingleClick(r, e) : n.clickCount > 1 && n.handleDoubleClick(r, e),
							n.clickCount = 0
						},
						this.timeoutHandler = setTimeout((function() {
							n.timeoutAction(),
							n.timeoutHandler = void 0,
							n.timeoutAction = void 0
						}), t.DOUBLE_CLICK_INTERVAL))
					}
					this.isDown = !1
				}
			},
			e.prototype.triggerMouseDown = function(e) {
				var t = this.locationInElementFromEvent(e);
				this.handleMouseDown(t, e),
				this.timeoutHandler && (clearTimeout(this.timeoutHandler), this.timeoutHandler = void 0, this.timeoutAction = void 0),
				this.lastMouseDownTime = Date.now(),
				this.isDown = !0,
				this.clickCount++,
				this.lastMouseDownLocation = t
			},
			e.prototype.triggerMouseMove = function(e) {
				var n = this.locationInElementFromEvent(e);
				if (this.isDown) {
					if (!this.isDragging) if (n.equals(this.lastMouseDownLocation));
					else {
						var o = Math.abs(n.x - this.lastMouseDownLocation.x),
						r = Math.abs(n.y - this.lastMouseDownLocation.y),
						i = Date.now() - this.lastMouseDownTime; (o > t.MIN_DRAG_DISTANCE_THRESHOLD || r > t.MIN_DRAG_DISTANCE_THRESHOLD || i > t.DOUBLE_CLICK_INTERVAL) && (this.isDragging = !0, window.addEventListener("mouseup", this.mouseDragUpAction, !0), window.addEventListener("mousemove", this.mouseDragMoveAction, !0), window.addEventListener("click", this.mouseDragUpOutOfCanvasAction, !0), this.handleStartDrag(this.lastMouseDownLocation, e), this.handleDrag(n, e))
					}
				} else this.timeoutHandler && !n.equals(this.lastMouseDownLocation) && (clearTimeout(this.timeoutHandler), this.timeoutAction(), this.timeoutHandler = void 0, this.timeoutAction = void 0),
				n.equals(this.lastMouseLocation) || this.handleMove(n, e);
				this.lastMouseLocation = n,
				this.lastMouseMoveEvent = e
			},
			e.prototype.mouseDragUpOutOfCanvasAction = function(e) {
				window.removeEventListener("click", this.mouseDragUpOutOfCanvasAction, !0)
			},
			e.prototype.handleMouseDown = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleMouseDown(e, t)
				}))
			},
			e.prototype.handleMouseUp = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleMouseUp(e, t)
				}))
			},
			e.prototype.handleMove = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleMove(e, t)
				}))
			},
			e.prototype.handleSingleClick = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleSingleClick(e, t)
				}))
			},
			e.prototype.handleDoubleClick = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleDoubleClick(e, t)
				}))
			},
			e.prototype.handleStartDrag = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleStartDrag(e, t)
				}))
			},
			e.prototype.handleDrag = function(e, t) {
				this.handlers.forEach((function(n) {
					n.handleDrag(e, t)
				}))
			},
			e.prototype.handleStopDrag = function() {
				this.handlers.forEach((function(e) {
					e.handleStopDrag()
				}))
			},
			e.DOUBLE_CLICK_INTERVAL = 250,
			e.MIN_DRAG_DISTANCE_THRESHOLD = 5,
			e = t = Yi([Object(de.injectable)()], e)
		} (),
		Ji = function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(t, n)
			};
			return function(t, n) {
				function o() {
					this.constructor = t
				}
				e(t, n),
				t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		} (),
		Zi = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		Qi = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		$i = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ea = function(e) {
			function t(t) {
				var n = e.call(this) || this;
				return n.instanceHub = t,
				n.mouseDragUpOutOfCanvasAction = n.mouseDragUpOutOfCanvasAction.bind(n),
				n
			}
			return Ji(t, e),
			t.prototype.registerEventOnElement = function(e) {
				var t = this;
				this.element = e;
				e.addEventListener("mouseenter", (function(e) {})),
				e.addEventListener("mouseleave", (function(e) {})),
				e.addEventListener("mousedown", (function(e) {
					t.instanceHub.chemDraw.isViewOnly || 0 === e.button && (t.triggerMouseDown(e), e.preventDefault())
				})),
				e.addEventListener("mousemove", (function(e) {
					t.instanceHub.chemDraw.isViewOnly || (t.triggerMouseMove(e), e.preventDefault())
				})),
				e.addEventListener("mouseup", (function(e) {
					t.instanceHub.chemDraw.isViewOnly || 0 === e.button && (t.triggerMouseUp(e), e.preventDefault())
				}))
			},
			t.prototype.mouseDragUpOutOfCanvasAction = function(t) {
				e.prototype.mouseDragUpOutOfCanvasAction.call(this, t);
				var n = this.instanceHub.chemDrawWebLoader.container.getBoundingClientRect(); (t.clientX < n.left || t.clientY < n.top || t.clientX > n.right || t.clientY > n.bottom) && document.body.contains(this.instanceHub.chemDrawWebLoader.getChemDrawComponent().root) && t.stopPropagation()
			},
			t = Zi([Object(de.injectable)(), $i(0, Object(de.inject)(Ce.InstanceHub)), Qi("design:paramtypes", [wt])], t)
		} (qi),
		ta = function() {
			function e(e, t) {
				this.name = e,
				this.instanceHub = t
			}
			return Object.defineProperty(e.prototype, "isChecked", {
				get: function() {
					return this.instanceHub.chemDraw.isCommandChecked(this.name)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "isEnabled", {
				get: function() {
					return this.instanceHub.chemDraw.isCommandEnabled(this.name)
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.execute = function(e) {
				if (_t.currentInstance = this.instanceHub.clipboardManager, this.instanceHub.clipboardManager.setClipboardActive(), e && this.instanceHub.clipboardManager.setCallback(e), "paste" === this.name) this.instanceHub.clipboardManager.executePaste();
				else if (!document.execCommand(this.name)) throw new Error("The command could not be executed because it was blocked by the browser security policy")
			},
			e
		} (),
		na = function() {
			function e(e, t) {
				this.name = e,
				this.instanceHub = t
			}
			return Object.defineProperty(e.prototype, "isChecked", {
				get: function() {
					return this.instanceHub.chemDraw.isCommandChecked(this.name)
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "isEnabled", {
				get: function() {
					return this.instanceHub.chemDraw.isCommandEnabled(this.name)
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.execute = function(e) {
				var t = this,
				n = this.instanceHub.chemDraw.handleCommand(this.name);
				0 === n ? this.instanceHub.chemDraw.processChange().then((function() {
					t.instanceHub.mouseEventSource.handlers.forEach((function(t) {
						t.refreshHighlight(),
						e && e()
					}))
				})) : console.error("Failed to execute command " + this.name + " with result " + n)
			},
			e
		} (),
		oa = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ra = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		ia = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		aa = function() {
			function e(e) {
				this.commands = new Map,
				this.instanceHub = e,
				this.addCommand(new ta("copy", e)),
				this.addCommand(new ta("cut", e)),
				this.addCommand(new ta("paste", e))
			}
			return e.prototype.getCommandWithName = function(e) {
				var t = this.commands.get(e);
				return t || (t = new na(e, this.instanceHub)),
				t
			},
			e.prototype.addCommand = function(e) {
				this.commands.set(e.name, e)
			},
			e = oa([Object(de.injectable)(), ia(0, Object(de.inject)(Ce.InstanceHub)), ra("design:paramtypes", [wt])], e)
		} (),
		sa = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		ca = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		la = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		ua = function() {
			function e(e) {
				var t = this;
				this.tools = [],
				this.addDeprecatedTools = function() {
					t.tools.push(new Yt("Print", "Printable Version", "Print tool has been deprecated")),
					t.tools.push(new Yt("MoveCanvas", "Move", "MoveCanvas tool has been deprecated")),
					t.tools.push(new Yt("Unintegral", "Unintegral", "Unintegral tool is merged into Integral tool"))
				},
				this.addUndoRedoTools = function() {
					t.addCommandTool("Undo", "Undo", "undo"),
					t.addCommandTool("Redo", "Redo", "redo")
				},
				this.addSelectionTools = function() {
					t.addCommandTool("LassoSelection", "Lasso", "chooseSelectionTool_Lasso"),
					t.addCommandTool("MarqueeSelection", "Marquee", "chooseSelectionTool_Marquee")
				},
				this.addZoomTools = function() {
					t.addCommandTool("ZoomIn", "Magnify", "zoomIn"),
					t.addCommandTool("ZoomOut", "Reduce", "zoomOut")
				},
				this.addEraserTool = function() {
					t.addCommandTool("Eraser", "Eraser", "chooseEdittingTool_Eraser")
				},
				this.addChainTools = function() {
					t.addCommandTool("AcyclicChain", "Acyclic Chain", "chooseAlkaneTool_Acyclic_Chain"),
					t.addCommandTool("SnakingChain", "Snaking Chain", "chooseAlkaneTool_Snaking_Chain")
				},
				this.addTextTools = function() {
					t.addCommandTool("Text", "Text", "chooseEdittingTool_Text"),
					t.addCommandTool("Subscript", "Subscript", "textStyleSubscript"),
					t.addCommandTool("Superscript", "Superscript", "textStyleSuperscript"),
					t.addCommandTool("Formula", "Formula", "textStyleFormula")
				},
				this.addClipboardTools = function() {
					t.addCommandTool("Copy", "Copy", "copy"),
					t.addCommandTool("Paste", "Paste", "paste")
				},
				this.addArrowTools = function() {
					t.addCommandTool("ArrowSolidLarge", "Solid (Large)", "chooseArrowTool_Large_Solid"),
					t.addCommandTool("ArrowSolidMedium", "Solid (Medium)", "chooseArrowTool_Medium_Solid"),
					t.addCommandTool("ArrowSolidSmall", "Solid (Small)", "chooseArrowTool_Small_Solid"),
					t.addCommandTool("ArrowHollowLarge", "Hollow (Large)", "chooseArrowTool_Large_Hollow"),
					t.addCommandTool("ArrowHollowMedium", "Hollow (Medium)", "chooseArrowTool_Medium_Hollow"),
					t.addCommandTool("ArrowRetrosyntheticLarge", "Retrosynthetic (Large)", "chooseArrowTool_Large_Retrosynthetic"),
					t.addCommandTool("ArrowRetrosyntheticSmall", "Retrosynthetic (Small)", "chooseArrowTool_Small_Retrosynthetic"),
					t.addCommandTool("ArrowBoldLarge", "Bold (Large)", "chooseArrowTool_Large_Bold"),
					t.addCommandTool("ArrowBoldMedium", "Bold (Medium)", "chooseArrowTool_Medium_Bold"),
					t.addCommandTool("ArrowBoldSmall", "Bold (Small)", "chooseArrowTool_Small_Bold"),
					t.addCommandTool("Arrow270CW", "270° CW", "chooseArrowTool_270_CW"),
					t.addCommandTool("Arrow180CW", "180° CW", "chooseArrowTool_180_CW"),
					t.addCommandTool("Arrow120CW", "120° CW", "chooseArrowTool_120_Solid_CW"),
					t.addCommandTool("Arrow90CW", "90° CW", "chooseArrowTool_90_CW"),
					t.addCommandTool("ArrowDashedLarge", "Dashed (Large)", "chooseArrowTool_Large_Dashed"),
					t.addCommandTool("ArrowDashedMedium", "Dashed (Medium)", "chooseArrowTool_Medium_Dashed"),
					t.addCommandTool("ArrowDashedSmall", "Dashed (Small)", "chooseArrowTool_Small_Dashed"),
					t.addCommandTool("Arrow270CCW", "270° CCW", "chooseArrowTool_270_CCW"),
					t.addCommandTool("Arrow180CCW", "180° CCW", "chooseArrowTool_180_CCW"),
					t.addCommandTool("Arrow120CCW", "120° CCW", "chooseArrowTool_120_Solid_CCW"),
					t.addCommandTool("Arrow90CCW", "90° CCW", "chooseArrowTool_90_CCW"),
					t.addCommandTool("ArrowOneSidedLeftLarge", "One-Sided (Left) (Large)", "chooseArrowTool_Large_OneSided_Left"),
					t.addCommandTool("ArrowOneSidedLeftMedium", "One-Sided (Left) (Medium)", "chooseArrowTool_Medium_OneSided_Left"),
					t.addCommandTool("ArrowOneSidedLeftSmall", "One-Sided (Left) (Small)", "chooseArrowTool_Small_OneSided_Left"),
					t.addCommandTool("Arrow270SingleCW", "270° Single CW", "chooseArrowTool_270_Single_CW"),
					t.addCommandTool("Arrow180SingleCW", "180° Single CW", "chooseArrowTool_180_Single_CW"),
					t.addCommandTool("Arrow120SingleCW", "120° Single CW", "chooseArrowTool_120_Single_CW"),
					t.addCommandTool("Arrow90SingleCW", "90° Single CW", "chooseArrowTool_90_Single_CW"),
					t.addCommandTool("ArrowOneSidedRightLarge", "One-Sided (Right) (Large)", "chooseArrowTool_Large_OneSided_Right"),
					t.addCommandTool("ArrowOneSidedRightMedium", "One-Sided (Right) (Medium)", "chooseArrowTool_Medium_OneSided_Right"),
					t.addCommandTool("ArrowOneSidedRightSmall", "One-Sided (Right) (Small)", "chooseArrowTool_Small_OneSided_Right"),
					t.addCommandTool("Arrow270SingleCCW", "270° Single CCW", "chooseArrowTool_270_Single_CCW"),
					t.addCommandTool("Arrow180SingleCCW", "180° Single CCW", "chooseArrowTool_180_Single_CCW"),
					t.addCommandTool("Arrow120SingleCCW", "120° Single CCW", "chooseArrowTool_120_Single_CCW"),
					t.addCommandTool("Arrow90SingleCCW", "90° Single CCW", "chooseArrowTool_90_Single_CCW"),
					t.addCommandTool("ArrowResonanceLarge", "Resonance (Large)", "chooseArrowTool_Large_Resonance"),
					t.addCommandTool("ArrowResonanceMedium", "Resonance (Medium)", "chooseArrowTool_Medium_Resonance"),
					t.addCommandTool("ArrowResonanceSmall", "Resonance (Small)", "chooseArrowTool_Small_Resonance"),
					t.addCommandTool("Arrow270Double", "270° 2 Headed", "chooseArrowTool_2Sided_270"),
					t.addCommandTool("Arrow180Double", "180° 2 Headed", "chooseArrowTool_180_Double"),
					t.addCommandTool("Arrow120Double", "120° 2 Headed", "chooseArrowTool_120_Double"),
					t.addCommandTool("Arrow90Double", "90° 2 Headed", "chooseArrowTool_90_Double"),
					t.addCommandTool("ArrowNoGoCrossLarge", "No Go (Cross) (Large)", "chooseArrowTool_Large_NoGo_Cross"),
					t.addCommandTool("ArrowNoGoCrossMedium", "No Go (Cross) (Medium)", "chooseArrowTool_Medium_NoGo_Cross"),
					t.addCommandTool("ArrowNoGoCrossSmall", "No Go (Cross) (Small)", "chooseArrowTool_Small_NoGo_Cross"),
					t.addCommandTool("ArrowEquilibriumLarge", "Equilibrium (Large)", "chooseArrowTool_Large_Equilibrium"),
					t.addCommandTool("ArrowEquilibriumMedium", "Equilibrium (Medium)", "chooseArrowTool_Medium_Equilibrium"),
					t.addCommandTool("ArrowEquilibriumSmall", "Equilibrium (Small)", "chooseArrowTool_Small_Equilibrium"),
					t.addCommandTool("Arrow270ElipticalCW", "270° Eliptical CW", "chooseArrowTool_270_Eliptical_CW"),
					t.addCommandTool("ArrowNoGoHashLarge", "No Go (Hash) (Large)", "chooseArrowTool_Large_NoGo_Hash"),
					t.addCommandTool("ArrowNoGoHashMedium", "No Go (Hash) (Medium)", "chooseArrowTool_Medium_NoGo_Hash"),
					t.addCommandTool("ArrowNoGoHashSmall", "No Go (Hash) (Small)", "chooseArrowTool_Small_NoGo_Hash"),
					t.addCommandTool("ArrowUnbalancedELarge", "Unbalanced Equilibrium (Large)", "chooseArrowTool_Large_UnbalancedE"),
					t.addCommandTool("ArrowUnbalancedEMedium", "Unbalanced Equilibrium (Medium)", "chooseArrowTool_Medium_UnbalancedE"),
					t.addCommandTool("ArrowUnbalancedESmall", "Unbalanced Equilibrium (Small)", "chooseArrowTool_Small_UnbalancedE"),
					t.addCommandTool("Arrow270ElipticalCCW", "270° Eliptical CCW", "chooseArrowTool_270_Eliptical_CCW"),
					t.addCommandTool("SolidArrow", "Solid Arrow", "chooseArrowTool_Small_Solid"),
					t.addCommandTool("DashedArrow", "Dashed Arrow", "chooseArrowTool_Small_Dashed"),
					t.addCommandTool("NoGoArrow", "NoGo Arrow", "chooseArrowTool_Small_NoGo_Cross"),
					t.addCommandTool("ResonanceArrow", "Resonance Arrow", "chooseArrowTool_Small_Resonance"),
					t.addCommandTool("HollowArrow", "Hollow Arrow", "chooseArrowTool_Medium_Hollow")
				},
				this.addCleanUpTools = function() {
					t.addCommandTool("StructureCleanup", "Clean Up Structure", "cleanStructure"),
					t.addCommandTool("ReactionCleanup", "Clean Up Reaction", "cleanReaction")
				},
				this.addGroupTools = function() {
					t.addCommandTool("Group", "Group", "group"),
					t.addCommandTool("Ungroup", "Ungroup", "ungroup"),
					t.addCommandTool("Integral", "Integral", "groupIntegral")
				},
				this.addSymbolTools = function() {
					t.addCommandTool("CirclePlus", "Circle Plus", "chooseSymbolTool_CirclePlus"),
					t.addCommandTool("CircleMinus", "Circle Minus", "chooseSymbolTool_CircleMinus"),
					t.addCommandTool("Plus", "Plus", "chooseSymbolTool_Plus"),
					t.addCommandTool("Minus", "Minus", "chooseSymbolTool_Minus"),
					t.addCommandTool("RadicalCation", "Radical Cation", "chooseSymbolTool_RadicalCation"),
					t.addCommandTool("RadicalAnion", "Radical Anion", "chooseSymbolTool_RadicalAnion"),
					t.addCommandTool("LonePair", "Lone Pair", "chooseSymbolTool_DoubleRadical"),
					t.addCommandTool("Radical", "Radical", "chooseSymbolTool_Radical"),
					t.addCommandTool("HDot", "H Dot", "chooseSymbolTool_HDot"),
					t.addCommandTool("HDash", "H Dash", "chooseSymbolTool_HDash"),
					t.addCommandTool("AttachmentDiamond", "Attachment Point", "chooseSymbolTool_Attachment_Diamond"),
					t.addCommandTool("AttachmentStar", "Attachment Point", "chooseSymbolTool_Attachment_Star"),
					t.addCommandTool("AttachmentPolymerBead", "Polymer Bead Attachment Point", "chooseSymbolTool_PolymerBeadAttachmentPoint"),
					t.addCommandTool("AttachmentWavy", "Attachment Point", "chooseSymbolTool_Attachment_Wavy"),
					t.addCommandTool("ElectronPushing", "Electron Pushing", "choosePushElectronTool"),
					t.addCommandTool("RadicalPushing", "Radical Pushing", "choosePushRadicalTool")
				},
				this.addBondTools = function() {
					t.addCommandTool("SolidBond", "Solid Bond", "chooseBondTool_Solid"),
					t.addCommandTool("BoldBond", "Bold Bond", "chooseBondTool_Bold"),
					t.addCommandTool("DoubleBond", "Double Bond", "chooseMultipleBondsTool_DoubleBond"),
					t.addCommandTool("DashedBond", "Dashed Bond", "chooseBondTool_Dashed"),
					t.addCommandTool("HashedBond", "Hashed Bond", "chooseBondTool_Hashed"),
					t.addCommandTool("HashedWedgedBond", "Hashed Wedged Bond", "chooseBondTool_Hashed_Wedged"),
					t.addCommandTool("HollowWedgedBond", "Hollow Wedged Bond", "chooseBondTool_Hollow_Wedged"),
					t.addCommandTool("WavyBond", "Wavy Bond", "chooseBondTool_Wavy"),
					t.addCommandTool("WedgedBond", "Wedged Bond", "chooseBondTool_Wedged"),
					t.addCommandTool("DativeBond", "Dative Bond", "chooseMultipleBondsTool_DativeBond"),
					t.addCommandTool("AnyBond", "Any Bond", "chooseMultipleBondsTool_AnyBond"),
					t.addCommandTool("DoubleOrAromaticBond", "Double or Aromatic Bond", "chooseMultipleBondsTool_DoubleOrAromaticBond"),
					t.addCommandTool("SingleOrAromaticBond", "Single or Aromatic Bond", "chooseMultipleBondsTool_SingleOrAromaticBond"),
					t.addCommandTool("SingleOrDoubleBond", "Single or Double Bond", "chooseMultipleBondsTool_SingleOrDoubleBond"),
					t.addCommandTool("BoldDoubleBond", "Bold Double Bond", "chooseMultipleBondsTool_BoldDoubleBond"),
					t.addCommandTool("DashedDoubleBond", "Dashed Double Bond", "chooseMultipleBondsTool_DashedDoubleBond"),
					t.addCommandTool("DoubleDashedDoubleBond", "Double Dashed Double Bond", "chooseMultipleBondsTool_DoubleDashedDoubleBond"),
					t.addCommandTool("DoubleEitherBond", "Double Either Bond", "chooseMultipleBondsTool_DoubleEitherBond"),
					t.addCommandTool("TripleBond", "Triple Bond", "chooseMultipleBondsTool_TripleBond"),
					t.addCommandTool("QuadrupleBond", "Quadruple Bond", "chooseMultipleBondsTool_QuadrupleBond"),
					t.addCommandTool("HashedWedgeBond", "Hashed Wedged Bond", "chooseBondTool_Hashed_Wedged"),
					t.addCommandTool("WedgeBond", "Wedged Bond", "chooseBondTool_Wedged")
				},
				this.addRingTools = function() {
					t.addCommandTool("Propane", "Cyclopropane Ring", "chooseRingTool_Cyclopropane"),
					t.addCommandTool("Butane", "Cyclobutane Ring", "chooseRingTool_Cyclobutane"),
					t.addCommandTool("Pentane", "Cyclopentane Ring", "chooseRingTool_Cyclopentane"),
					t.addCommandTool("Hexane", "Cyclohexane Ring", "chooseRingTool_Cyclohexane"),
					t.addCommandTool("Heptane", "Cycloheptane Ring", "chooseRingTool_Cycloheptane"),
					t.addCommandTool("Octane", "Cyclooctane Ring", "chooseRingTool_Cyclooctane"),
					t.addCommandTool("CyclohexaneChairRight", "Chair Cyclohexane", "chooseRingTool_Chair_Cyclohexane1"),
					t.addCommandTool("CyclohexaneChairLeft", "Chair Cyclohexane", "chooseRingTool_Chair_Cyclohexane2"),
					t.addCommandTool("Pentadiene", "Cyclopentadiene", "chooseRingTool_Cyclopentadiene"),
					t.addCommandTool("Benzene", "Benzene", "chooseRingTool_Benzene")
				},
				this.addNameStructureTools = function() {
					t.addCommandTool("NameToStructure", "Name to Structure", "convertNameToStructure"),
					t.addCommandTool("StructureToName", "Structure to Name", "convertStructureToName")
				},
				this.addContractExpandTools = function() {
					t.addCommandTool("ExpandLabel", "Expand Label", "expandLabel"),
					t.addCommandTool("ContractLabel", "Contract Label", "contractLabel")
				},
				this.addTemplateTool = function() {
					t.addCommandTool("Templates", "Templates", "chooseTemplateTool")
				},
				this.addBracketTools = function() {
					t.addCommandTool("SquareBrackets", "Brackets", "chooseBracketTool_SquareBrackets"),
					t.addCommandTool("LeftSquareBracket", "Bracket", "chooseBracketTool_LeftSquareBracket"),
					t.addCommandTool("RoundBrackets", "Parentheses", "chooseBracketTool_Parenthesis"),
					t.addCommandTool("LeftRoundBracket", "Parenthesis", "chooseBracketTool_LeftParenthesis"),
					t.addCommandTool("CurlyBrackets", "Braces", "chooseBracketTool_CurlyBrackets"),
					t.addCommandTool("LeftCurlyBracket", "Brace", "chooseBracketTool_LeftCurlyBracket"),
					t.addCommandTool("DoubleDaggerBrackets", "Double Dagger", "chooseBracketTool_DoubleDagger"),
					t.addCommandTool("SingleDaggerBracket", "Dagger", "chooseBracketTool_SingleDagger")
				},
				this.addQueryTools = function() {
					t.addCommandTool("AlternativeGroup", "Alternative Group", "chooseQueryTool_AlternativeGroup"),
					t.addCommandTool("StructureProperties", "Show Properties", "showStructurePropertiesDialog"),
					t.addCommandTool("AddMultiCenterAttachment", "Add Multi-Center Attachment", "addMultiCenterAttachment"),
					t.addCommandTool("ReactionAtomMap", "Reaction Atom Map", "chooseQueryTool_ReactionAtomAtomMap"),
					t.addCommandTool("AddVariableAttachment", "Add Variable Attachment", "addVariableAttachment")
				},
				this.addDebugTools = function() {
					t.addCommandTool("ReactionInterpretation", "Reaction Interpretation", "toggleReactionInterpretation")
				},
				this.addCommandTool = function(e, n, o) {
					var r = new no(e, n, o, (function() {
						t.instanceHub.commandLibrary.getCommandWithName(o).execute()
					}));
					t.tools.push(r)
				},
				this.instanceHub = e,
				this.addUndoRedoTools(),
				this.addSelectionTools(),
				this.addZoomTools(),
				this.addEraserTool(),
				this.addChainTools(),
				this.addTextTools(),
				this.addClipboardTools(),
				this.addArrowTools(),
				this.addCleanUpTools(),
				this.addGroupTools(),
				this.addSymbolTools(),
				this.addBondTools(),
				this.addRingTools(),
				this.addNameStructureTools(),
				this.addContractExpandTools(),
				this.addTemplateTool(),
				this.addBracketTools(),
				this.addQueryTools(),
				this.addDebugTools(),
				this.addDeprecatedTools()
			}
			return e.prototype.getTool = function(e) {
				for (var t = 0,
				n = this.tools; t < n.length; t++) {
					var o = n[t];
					if (o.name === e) return o
				}
				throw new Error("Tool " + e + " was not found")
			},
			e = sa([Object(de.injectable)(), la(0, Object(de.inject)(Ce.InstanceHub)), ca("design:paramtypes", [wt])], e)
		} (),
		pa = function(e, t, n, o) {
			var r, i = arguments.length,
			a = i < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
			return i > 3 && a && Object.defineProperty(t, n, a),
			a
		},
		da = function(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		},
		ha = function(e, t) {
			return function(n, o) {
				t(n, o, e)
			}
		},
		fa = function() {
			function e(e) {
				this.enabled = !0,
				this.configurationManager = e
			}
			return Object.defineProperty(e.prototype, "isEnabled", {
				get: function() {
					return this.enabled
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.enable = function(e) {
				this.enabled = e
			},
			e.prototype.getClipboardData = function(e, t) {
				var n = this.getUrl("toClipboardData"),
				o = {
					chemData: e,
					formats: t
				};
				return this.postJson(n, o).then((function(e) {
					if (e.ok) return e.json();
					throw new Error("Failed to get some clipboard data from service. Reason: " + e.statusText)
				}))
			},
			e.prototype.getProperties = function(e, t) {
				var n = this.getUrl("toProperties"),
				o = {
					chemData: e,
					chemDataType: t
				};
				return this.postJson(n, o).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to get properties from service. Reason: " + e.statusText)
				}))
			},
			e.prototype.findReactions = function(e) {
				var t = this.getUrl("findReactions"),
				n = {
					chemData: e
				};
				return this.postJson(t, n).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to find reactions from service. Reason: " + e.statusText + ".")
				}))
			},
			e.prototype.convertToCDXML = function(e, t) {
				var n = this.getUrl("tocdxml"),
				o = {
					chemData: e,
					chemDataType: t
				};
				return this.postJson(n, o).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to convert the given content to CDXML. Reason: " + e.statusText)
				}))
			},
			e.prototype.nameToStructure = function(e) {
				var t = this.getUrl("tocdxml"),
				n = {
					chemData: e,
					chemDataType: "chemical/x-name"
				};
				return this.postJson(t, n).then((function(t) {
					if (t.ok) return t.text();
					throw new Error('Failed to get CDXML for name "' + e + '". Reason: ' + t.statusText + ".")
				}))
			},
			e.prototype.structureToName = function(e) {
				var t = this.getUrl("toName"),
				n = {
					chemData: e
				};
				return this.postJson(t, n).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to get name for this structure. Reason: " + e.statusText + ".")
				}))
			},
			e.prototype.getMOL = function(e) {
				var t = this.getUrl("tomolfile"),
				n = {
					chemData: e
				};
				return this.postJson(t, n).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to get MOL format for this structure. Reason: " + e.statusText + ".")
				}))
			},
			e.prototype.getRXN = function(e) {
				var t = this.getUrl("torxnfile"),
				n = {
					chemData: e
				};
				return this.postJson(t, n).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to get RXN format for this structure. Reason: " + e.statusText + ".")
				}))
			},
			e.prototype.getSVG = function(e) {
				var t = this.getUrl("tosvg"),
				n = {
					chemData: e
				};
				return this.postJson(t, n).then((function(e) {
					if (e.ok) return e.text();
					throw new Error("Failed to get SVG image for this structure. Reason: " + e.statusText + ".")
				}))
			},
			e.prototype.postJson = function(e, t) {
				return this.isEnabled ? fetch(e, {
					method: "POST",
					mode: "cors",
					credentials: "include",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(t)
				}).
				catch((function(t) {
					throw console.log("Unable to contact the ChemDraw Web Service at " + e + ', check the "chemservice" value in your configuration.'),
					new Error("Unable to contact the ChemDraw Web Service, check that you are connected to the internet")
				})) : new Promise((function() {
					throw new Error("The ChemDraw Web Service is disabled")
				}))
			},
			e.prototype.getUrl = function(e) {
				var t = this.configurationManager.configuration.appProperties.getRemoteChemistryServiceURL();
				return ke.a.join(t, e)
			},
			e = pa([Object(de.injectable)(), ha(0, Object(de.inject)(Ce.ConfigurationManager)), da("design:paramtypes", [Eo])], e)
		} (),
		ma = new de.ContainerModule((function(e) {
			e(Ce.InstanceHub).to(wt).inSingletonScope(),
			e(Ce.ChemDrawCoreWrapper).to(ao).inSingletonScope(),
			e(Ce.CommandLibrary).to(aa).inSingletonScope(),
			e(Ce.ToolLibrary).to(ua).inSingletonScope(),
			e(Ce.MouseEventSource).to(ea).inSingletonScope(),
			e(Ce.KeyEventSource).to(Xi).inSingletonScope(),
			e(Ce.FileDropEventSource).to(Ni).inSingletonScope(),
			e(Ce.ClipboardManager).to(_t).inSingletonScope(),
			e(Ce.ProgressIndicatorController).to(gi).inSingletonScope(),
			e(Ce.MessagePresenterController).to(Re).inSingletonScope(),
			e(Ce.ClipboardIconController).to(ui).inSingletonScope(),
			e(Ce.DialogContainerController).to(di).inSingletonScope(),
			e(Ce.ChemistryService).to(fa).inSingletonScope(),
			e(Ce.EventPanelController).to(fi).inSingletonScope(),
			e(Ce.TextEditorController).to(yi).inSingletonScope(),
			e(Ce.ToolbarController).to(vi).inSingletonScope(),
			e(Ce.ApplicationLogoController).to(ai).inSingletonScope(),
			e(Ce.LicenseManager).to(Ro).inSingletonScope(),
			e(Ce.ConfigurationManager).to(Eo).inSingletonScope(),
			e(Ce.DocumentStyleManager).to(Po).inSingletonScope(),
			e(Ce.LicenseChecker).to(ei).inSingletonScope(),
			e(Ce.ConfigurationLoader).to(Vr).inSingletonScope(),
			e(Ce.ChemDrawWebLoader).to(Lr).inSingletonScope(),
			e(Ce.CoreConfigurator).to(Yr).inSingletonScope(),
			e(Ce.CDDConfigurator).to(Uo).inSingletonScope(),
			e(Ce.WebServiceConfigurator).to(ri).inSingletonScope(),
			e(Ce.ClipboardConfigurator).to(Wr).inSingletonScope(),
			e(Ce.SetupWizard).to(jo).inSingletonScope(),
			e(Ce.EventEmitter).toConstantValue(new so)
		})),
		ga = function() {
			function e(e) {
				var t = new de.Container;
				t.load(ma),
				this.instanceHub = t.get(Ce.InstanceHub),
				this.instanceHub.initialize(t),
				this.instanceHub.configurationManager.setParams(e || new me),
				e && this.instanceHub.chemDrawWebLoader.setDocument(e.data, e.dataFormat),
				this.cdSelection = new ge(this.instanceHub)
			}
			return e.prototype.attach = function(e, t, n) {
				var o;
				if (e instanceof HTMLElement ? o = e: "string" == typeof e && (o = document.getElementById(e)), void 0 !== o) {
					if (this.cddContainer = document.createElement("div"), this.cddContainer.className = "cdd-container", o.appendChild(this.cddContainer), !this.instanceHub) throw new Error("Cannot reattach ChemDraw JS object");
					this.instanceHub.chemDrawWebLoader.setContainer(this.cddContainer),
					this.instanceHub.chemDrawWebLoader.setCallback(t),
					this.instanceHub.setupWizard.execute().
					catch((function(e) {
						n(e)
					}))
				} else n(new Error("Target element is undefined"))
			},
			e.prototype.dispose = function() {
				this.cddContainer && (m.unmountComponentAtNode(this.cddContainer), this.cddContainer.parentElement && this.cddContainer.parentElement.removeChild(this.cddContainer), this.cddContainer = null),
				this.instanceHub && (this.instanceHub.dispose(), this.instanceHub = null)
			},
			e.prototype.clear = function() {
				var e = this.instanceHub.chemDraw,
				t = e.cdDoc,
				n = this.instanceHub.documentStyleManager.getDefaultZoomLevelForDocument(t);
				t.clearContent(),
				t.performWithUndoDisabled((function() {
					t.setZoomLevel(n)
				})),
				e.processChange(!0)
			},
			e.prototype.loadCDXML = function(e) {
				this.doLoadDocument(e, ye.a.CDXML)
			},
			e.prototype.loadMOL = function(e, t) {
				var n;
				try {
					this.doLoadDocument(e, ye.a.MOLFILE)
				} catch(e) {
					n = e
				}
				t && t(n ? void 0 : this.getCDXML(), n)
			},
			e.prototype.loadSMILES = function(e, t) {
				var n;
				try {
					this.doLoadDocument(e, ye.a.SMILES)
				} catch(e) {
					n = e
				}
				t && t(n ? void 0 : this.getCDXML(), n)
			},
			e.prototype.loadB64CDX = function(e, t) {
				var n;
				try {
					this.doLoadDocument(e, ye.a.B64CDX)
				} catch(e) {
					n = e
				}
				t && t(n ? void 0 : this.getCDXML(), n)
			},
			e.prototype.getCDXML = function() {
				try {
					return this.instanceHub.chemDraw.documentToXml()
				} catch(t) {
					var e = Y.getException(t);
					throw new Error(e ? e.message: t)
				}
			},
			e.prototype.getB64CDX = function() {
				try {
					return this.instanceHub.chemDraw.documentToB64CDX()
				} catch(t) {
					var e = Y.getException(t);
					throw new Error(e ? e.message: t)
				}
			},
			e.prototype.loadConfig = function(e) {
				this.instanceHub.configurationManager.updateConfigObject(e),
				this.applyConfig()
			},
			e.prototype.loadConfigFromUrl = function(e, t) {
				var n = this;
				Ne.fetch(e, {
					cache: "no-cache"
				}).then((function(e) {
					e.text().then((function(e) {
						try {
							var o = JSON.parse(e);
							n.loadConfig(o),
							t && t()
						} catch(e) {
							t && t("Failed to parse configuration file. Reason: " + e.message + ".")
						}
					}))
				})).
				catch((function(n) {
					t && t("Failed to get configuration file from " + e + ". Reason: " + n.statusText + ".")
				}))
			},
			e.prototype.getVersion = function() {
				return O.a.getAppVersion()
			},
			e.prototype.setViewOnly = function(e) {
				this.instanceHub.chemDraw.setViewOnly(e)
			},
			e.prototype.fitToContainer = function() {
				this.instanceHub.chemDraw.fitToContainer()
			},
			e.prototype.shrinkToFit = function() {
				this.instanceHub.chemDraw.shrinkToFit()
			},
			e.prototype.getErrors = function() {
				return this.instanceHub.chemDraw.cdDoc.processErrors()
			},
			e.prototype.isBlankStructure = function() {
				return this.instanceHub.chemDraw.cdDoc.isEmpty()
			},
			e.prototype.getProperties = function(e) {
				var t = this.instanceHub.chemDraw.documentToXml();
				this.instanceHub.chemistryService.getProperties(t, void 0).then((function(t) {
					e(t, void 0)
				})).
				catch((function(t) {
					e(void 0, t.toString())
				}))
			},
			e.prototype.findReactions = function(e) {
				var t = this.instanceHub.chemDraw.documentToXml();
				this.instanceHub.chemistryService.findReactions(t).then((function(t) {
					e(t, void 0)
				})).
				catch((function(t) {
					e(void 0, t.toString())
				}))
			},
			e.prototype.addReactant = function(e) {
				return this.addReactionComponent("reactant", e)
			},
			e.prototype.addReagent = function(e) {
				return this.addReactionComponent("reagent", e)
			},
			e.prototype.addProduct = function(e) {
				return this.addReactionComponent("product", e)
			},
			e.prototype.setContentChangedHandler = function(e) {
				this.instanceHub.chemDraw.contentChangedHandlerCallback = function(t, n) {
					if (e) try {
						t.isClean() || e(n)
					} catch(e) {
						console.error("Calling content changed handler throws error:\n" + e)
					}
				}
			},
			e.prototype.isSaved = function() {
				return this.instanceHub.chemDraw.cdDoc.isClean()
			},
			e.prototype.markAsSaved = function() {
				this.instanceHub.chemDraw.cdDoc.markClean()
			},
			e.prototype.labelFragments = function(e) {
				void 0 === e && (e = []);
				var t = this.instanceHub.chemDraw,
				n = t.cdDoc;
				try {
					a.FragmentAPI.labelFragments(n, e),
					t.processChange()
				} catch(e) {
					var o = Y.getException(e);
					throw new Error(o ? o.message: e)
				}
			},
			e.prototype.getFragmentsInfo = function(e) {
				return console.warn("ChemDraw: API getFragmentsInfo is deprecated. Please use getAllFragmentsInfo and getSelectedFragmentsInfo instead."),
				this.doGetFragmentsInfo("", e)
			},
			e.prototype.getAllFragmentsInfo = function(e) {
				return this.doGetFragmentsInfo("all", e)
			},
			e.prototype.getSelectedFragmentsInfo = function(e) {
				return this.doGetFragmentsInfo("selected", e)
			},
			e.prototype.nameToStructure = function(e, t) {
				this.instanceHub.chemistryService.nameToStructure(e).then((function(e) {
					t(e, void 0)
				})).
				catch((function(e) {
					t(void 0, e.toString())
				}))
			},
			e.prototype.structureToName = function(e, t) {
				this.instanceHub.chemistryService.structureToName(e).then((function(e) {
					t(e, void 0)
				})).
				catch((function(e) {
					t(void 0, e.toString())
				}))
			},
			e.prototype.getMOL = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToMOLV2000(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getMOLV3000 = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToMOLV3000(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getSMILES = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToSMILES(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getInChI = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToInChI(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getInChIKey = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToInChIKey(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getRXN = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToRXNV2000(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getRXNV3000 = function(e) {
				try {
					e(this.instanceHub.chemDraw.documentToRXNV3000(), void 0)
				} catch(n) {
					var t = Y.getException(n);
					e(void 0, t ? t.message: n)
				}
			},
			e.prototype.getSVG = function(e, t) {
				try {
					if ("function" == typeof e) {
						var n = this.instanceHub.chemDraw.documentToSVG(t);
						return e(n, void 0),
						n
					}
					return this.instanceHub.chemDraw.documentToSVG(e)
				} catch(t) {
					var o = Y.getException(t);
					if ("function" != typeof e) throw new Error(o ? o.message: t);
					e(void 0, o ? o.message: t)
				}
			},
			e.prototype.getImgUrl = function(e) {
				try {
					return "data:image/png;base64," + this.instanceHub.chemDraw.documentToPNG(e)
				} catch(e) {
					var t = Y.getException(e);
					throw new Error(t ? t.message: e)
				}
			},
			e.prototype.getCanvasSize = function() {
				var e = this.instanceHub.chemDraw.cdDoc.getMainPage().curRect;
				return {
					width: e.width,
					height: e.height
				}
			},
			e.prototype.setCanvasSize = function(e, t) {
				var n = e.width,
				o = e.height,
				r = ao.PAGE_PADDING,
				i = this.instanceHub.chemDraw.cdDoc;
				if (t && t.doNotCropDrawings) {
					var s = i.contentBounds;
					n = Math.max(n, s.right + r),
					o = Math.max(o, s.bottom + r)
				}
				var c = i.getMutableMainPage().getScale(),
				l = c.curToInternDistance(n),
				u = c.curToInternDistance(o),
				p = new a.DocumentPosterSize(l, u);
				i.resize(p),
				p.delete()
			},
			e.prototype.getMolecularWeight = function(e, t, n) {
				this.instanceHub.chemistryService.getProperties(e, t).then((function(o) {
					var r = JSON.parse(o),
					i = parseFloat(r.MW);
					if (isNaN(i)) throw new Error("Cannot get molecular weight for " + t + ": " + e);
					n(i, void 0)
				})).
				catch((function(e) {
					n(void 0, e)
				}))
			},
			e.prototype.convertToCDXML = function(e, t, n) {
				this.instanceHub.chemistryService.convertToCDXML(e, t).then((function(e) {
					n(e, void 0)
				})).
				catch((function(e) {
					n(void 0, e)
				}))
			},
			e.prototype.getDocumentName = function() {
				return this.instanceHub.chemDraw.cdDoc.name
			},
			e.prototype.setDocumentName = function(e) {
				this.instanceHub.chemDraw.cdDoc.name = e
			},
			e.prototype.getDocumentSetting = function(e) {
				return this.instanceHub.chemDraw.cdDoc.getSetting(e)
			},
			e.prototype.setDocumentSetting = function(e, t) {
				this.instanceHub.chemDraw.cdDoc.setSetting(e, t)
			},
			e.prototype.getDocumentZoomLevel = function() {
				return this.instanceHub.chemDraw.cdDoc.getZoomLevel()
			},
			e.prototype.setDocumentZoomLevel = function(e) {
				this.instanceHub.chemDraw.cdDoc.setZoomLevel(e)
			},
			Object.defineProperty(e.prototype, "selection", {
				get: function() {
					return this.cdSelection
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.getCommandWithName = function(e) {
				return this.instanceHub.chemDraw.getCommandIDForName(e) ? this.instanceHub.commandLibrary.getCommandWithName(e) : null
			},
			e.prototype.getAvailableCommandNames = function() {
				return this.instanceHub.chemDraw.getAvailableCommandNames()
			},
			e.prototype.doLoadDocument = function(e, t) {
				var n = this; !
				function(e) {
					he = !0;
					try {
						e && e()
					} catch(e) {
						throw e
					} finally {
						he = !1
					}
				} ((function() {
					n.instanceHub.chemDraw.newDocument(e, t)
				}))
			},
			e.prototype.applyConfig = function() {
				var e = {
					execute: function() {
						return new Promise((function(e, n) {
							t.chemDraw.initToolbar(t.configurationManager.configuration, t.toolLibrary);
							var o = t.chemDrawWebLoader.getChemDrawComponent().chemDrawPanel.workspaceContainer;
							t.toolbarContainerController.updateLayout(o.offsetWidth, o.offsetHeight),
							t.chemDrawWebLoader.getChemDrawComponent().chemDrawPanel.configureWorkspace(),
							t.chemDraw.processChange(),
							e()
						}))
					}
				},
				t = this.instanceHub,
				n = [t.cddConfigurator, t.webServiceConfigurator, e];
				n = n.concat(t.setupWizard.postSteps),
				new be(n).execute().
				catch((function(e) {
					throw e
				}))
			},
			e.prototype.addReactionComponent = function(e, t) {
				if ("string" != typeof t) throw new TypeError("The argument is not a string");
				var n = this.instanceHub.chemDraw,
				o = n.cdDoc;
				try {
					var r = void 0;
					switch (e) {
					case "reactant":
						r = a.ReactionAPI.addReactant(o, t);
						break;
					case "reagent":
						r = a.ReactionAPI.addReagent(o, t);
						break;
					case "product":
						r = a.ReactionAPI.addProduct(o, t)
					}
					return n.processChange(),
					r
				} catch(e) {
					var i = Y.getException(e);
					throw new Error(i ? i.message: e)
				}
			},
			e.prototype.doGetFragmentsInfo = function(e, t) {
				var n, o = this.instanceHub.chemDraw.cdDoc;
				switch (t = Object.assign({
					transparentBackground: !0
				},
				t), e) {
				case "all":
					n = a.FragmentAPI.getAllFragmentsInfo(o, t);
					break;
				case "selected":
					n = a.FragmentAPI.getSelectedFragmentsInfo(o, t);
					break;
				default:
					0 === (n = a.FragmentAPI.getSelectedFragmentsInfo(o, t)).length && (n = a.FragmentAPI.getAllFragmentsInfo(o, t))
				}
				return n.forEach((function(e) {
					var t = e.image;
					e.image = "data:image/png;base64," + t
				})),
				n.sort((function(e, t) {
					var n = e.x - t.x;
					return 0 !== n ? n: e.y - t.y
				})),
				n
			},
			e
		} (),
		ba = function() {
			function e(e) {
				this.g = new ga(e)
			}
			return e.prototype.attach = function(e, t, n) {
				this.g.attach(e, t, n)
			},
			e.prototype.dispose = function() {
				this.g && (this.g.dispose(), this.g = null)
			},
			e.prototype.clear = function() {
				this.g.clear()
			},
			e.prototype.loadCDXML = function(e) {
				this.g.loadCDXML(e)
			},
			e.prototype.loadMOL = function(e, t) {
				this.g.loadMOL(e, t)
			},
			e.prototype.loadSMILES = function(e, t) {
				this.g.loadSMILES(e, t)
			},
			e.prototype.loadB64CDX = function(e, t) {
				this.g.loadB64CDX(e, t)
			},
			e.prototype.getCDXML = function() {
				return this.g.getCDXML()
			},
			e.prototype.getB64CDX = function() {
				return this.g.getB64CDX()
			},
			e.prototype.loadConfig = function(e) {
				this.g.loadConfig(e)
			},
			e.prototype.loadConfigFromUrl = function(e, t) {
				this.g.loadConfigFromUrl(e, t)
			},
			e.prototype.getVersion = function() {
				return this.g.getVersion()
			},
			e.prototype.setViewOnly = function(e) {
				this.g.setViewOnly(e)
			},
			e.prototype.fitToContainer = function() {
				this.g.fitToContainer()
			},
			e.prototype.shrinkToFit = function() {
				this.g.shrinkToFit()
			},
			e.prototype.getErrors = function() {
				return this.g.getErrors()
			},
			e.prototype.isBlankStructure = function() {
				return this.g.isBlankStructure()
			},
			e.prototype.getProperties = function(e) {
				this.g.getProperties(e)
			},
			e.prototype.findReactions = function(e) {
				this.g.findReactions(e)
			},
			e.prototype.addReactant = function(e) {
				return this.g.addReactant(e)
			},
			e.prototype.addReagent = function(e) {
				return this.g.addReagent(e)
			},
			e.prototype.addProduct = function(e) {
				return this.g.addProduct(e)
			},
			e.prototype.setContentChangedHandler = function(e) {
				this.g.setContentChangedHandler(e)
			},
			e.prototype.isSaved = function() {
				return this.g.isSaved()
			},
			e.prototype.markAsSaved = function() {
				this.g.markAsSaved()
			},
			e.prototype.labelFragments = function(e) {
				this.g.labelFragments(e)
			},
			e.prototype.getFragmentsInfo = function() {
				return this.g.getFragmentsInfo()
			},
			e.prototype.getAllFragmentsInfo = function() {
				return this.g.getAllFragmentsInfo()
			},
			e.prototype.getSelectedFragmentsInfo = function() {
				return this.g.getSelectedFragmentsInfo()
			},
			e.prototype.nameToStructure = function(e, t) {
				this.g.nameToStructure(e, t)
			},
			e.prototype.structureToName = function(e, t) {
				this.g.structureToName(e, t)
			},
			e.prototype.getMOL = function(e) {
				this.g.getMOL(e)
			},
			e.prototype.getMOLV3000 = function(e) {
				this.g.getMOLV3000(e)
			},
			e.prototype.getSMILES = function(e) {
				this.g.getSMILES(e)
			},
			e.prototype.getInChI = function(e) {
				this.g.getInChI(e)
			},
			e.prototype.getInChIKey = function(e) {
				this.g.getInChIKey(e)
			},
			e.prototype.getRXN = function(e) {
				this.g.getRXN(e)
			},
			e.prototype.getRXNV3000 = function(e) {
				this.g.getRXNV3000(e)
			},
			e.prototype.getImgUrl = function(e) {
				return this.g.getImgUrl(e)
			},
			e.prototype.getSVG = function(e, t) {
				return this.g.getSVG(e, t)
			},
			e.prototype.getCanvasSize = function() {
				return this.g.getCanvasSize()
			},
			e.prototype.setCanvasSize = function(e, t) {
				this.g.setCanvasSize(e, t)
			},
			e.prototype.getMolecularWeight = function(e, t, n) {
				this.g.getMolecularWeight(e, t, n)
			},
			e.prototype.convertToCDXML = function(e, t, n) {
				this.g.convertToCDXML(e, t, n)
			},
			e.prototype.getDocumentName = function() {
				return this.g.getDocumentName()
			},
			e.prototype.setDocumentName = function(e) {
				this.g.setDocumentName(e)
			},
			e.prototype.getDocumentSetting = function(e) {
				return this.g.getDocumentSetting(e)
			},
			e.prototype.setDocumentSetting = function(e, t) {
				this.g.setDocumentSetting(e, t)
			},
			e.prototype.getDocumentZoomLevel = function() {
				return this.g.getDocumentZoomLevel()
			},
			e.prototype.setDocumentZoomLevel = function(e) {
				this.g.setDocumentZoomLevel(e)
			},
			Object.defineProperty(e.prototype, "selection", {
				get: function() {
					return this.g.selection
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.getCommandWithName = function(e) {
				return this.g.getCommandWithName(e)
			},
			e.prototype.getAvailableCommandNames = function() {
				return this.g.getAvailableCommandNames()
			},
			e
		} (),
		ya = a.AlertDisplayService.extend("AlertDisplayService", {
			preventAlert: !1,
			DisplayAlert: function(e) {
				return he || this.preventAlert ? a.AlertResult.PrimaryButton.value: e.buttons.size() > 1 ? confirm(e.message) ? a.AlertResult.PrimaryButton.value: a.AlertResult.SecondaryButton.value: (alert(e.message), a.AlertResult.PrimaryButton.value)
			}
		}),
		Ca = a.CursorService.extend("CursorService", {
			SetVisible: function(e) {
				c.activeInstanceHub && c.activeInstanceHub.eventPanelController && c.activeInstanceHub.eventPanelController.setCursorVisible(e)
			},
			SetCursorByID: function(e) {
				c.activeInstanceHub && c.activeInstanceHub.eventPanelController && c.activeInstanceHub.eventPanelController.setCursorByID(e)
			}
		}),
		va = window.perkinelmer || {};
		va.ChemdrawWeb = ba,
		va.ChemdrawWebParams = me,
		window.perkinelmer = va;
		try {
			a.AlertDisplayService.setSharedService(new ya),
			a.CursorService.setSharedService(new Ca),
			a.ClipboardServiceWeb.setSharedService(new Nt);
			var wa = window.chemdrawLoaded;
			if ("function" == typeof wa) var Sa = setInterval((function() {
				"loading" !== document.readyState && (clearInterval(Sa), wa())
			}), 10)
		} catch(e) {
			var Ea = Y.getException(e),
			Da = void 0;
			Da = Ea ? "Failed to initialise ChemDraw Core library: " + Ea.message + " (" + Ea.errorCode + ")": e,
			console.error(Da);
			var Ta = window.chemdrawLoadingFailed;
			"function" == typeof Ta && Ta(new Error(Da))
		}
	}
}]);