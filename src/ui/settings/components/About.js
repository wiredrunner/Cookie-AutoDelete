/**
Copyright (c) 2017 Kenny Do

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/
import React from "react";

const About = (props) => {
	const {
		style
	} = props;
	return (
		<div style={style}>
			<h1>{browser.i18n.getMessage("aboutText")}</h1>
			<a href="https://github.com/mrdokenny/Cookie-AutoDelete/issues">{browser.i18n.getMessage("reportIssuesText")}</a> <br /><br />
			<a href="https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh"><span>{`Chrome ${browser.i18n.getMessage("versionText")}`}</span> </a><br/>
			<a href="https://addons.mozilla.org/firefox/addon/cookie-autodelete/"><span>{`Firefox ${browser.i18n.getMessage("versionText")}`}</span> </a> <br/><br/>
			<span>{`${browser.i18n.getMessage("contributorsText")}`}</span>
			<ul>
				<li>Kenny Do (Creator)</li>
				<li>SW1FT (pt_PT translation)</li>
				<li>AdmiralAnimE, StoyanDimitrov (bg translation)</li>
				<li>Strayer (de translation)</li>
				<li>yfdyh000 (zh_CN translation)</li>
				<li>eson57 (sv translation)</li>
				<li>kostich (sr translation)</li>
				<li>netrik182 (pt_BR translation)</li>
				<li>Riotism (zh_ZW translation)</li>
			</ul>
		</div>
	);
};

export default About;
