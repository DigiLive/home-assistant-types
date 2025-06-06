import { type CSSResultGroup, LitElement, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-alert";
import "../../../components/ha-ansi-to-html";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-md-divider";
import "../../../components/ha-md-menu";
import "../../../components/ha-md-menu-item";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import type { LocalizeFunc } from "../../../common/translations/localize";
import type { HomeAssistant } from "../../../types";
declare class ErrorLogCard extends LitElement {
    hass: HomeAssistant;
    localizeFunc?: LocalizeFunc<any>;
    filter: string;
    header?: string;
    provider?: string;
    allowSwitch: boolean;
    private _logElement?;
    private _scrollTopMarkerElement?;
    private _scrollBottomMarkerElement?;
    private _ansiToHtmlElement?;
    private _bootsMenu?;
    private _firstCursor?;
    private _scrolledToBottomController;
    private _scrolledToTopController;
    private _newLogsIndicator?;
    private _error?;
    private _logStreamAborter?;
    private _streamSupported?;
    private _loadingState;
    private _loadingPrevState?;
    private _noSearchResults;
    private _numberOfLines?;
    private _boot;
    private _boots?;
    private _showBootsSelect;
    private _wrapLines;
    private _downloadSupported?;
    private _logsFileLink?;
    protected render(): TemplateResult;
    protected willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: any): void;
    disconnectedCallback(): void;
    private _downloadLogs;
    private _loadLogs;
    private _debounceSearch;
    private _debounceScrollToBottom;
    private _scrollToBottom;
    private _handleConnectionStatus;
    private _loadMoreLogs;
    private _handleTopScroll;
    private _loadBoots;
    private _toggleLineWrap;
    private _handleOverflowAction;
    private _toggleBootsMenu;
    private _setBoot;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "error-log-card": ErrorLogCard;
    }
}
export {};
