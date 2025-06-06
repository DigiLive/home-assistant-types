import "@material/mwc-button";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button-menu";
import "../../components/ha-icon";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-next";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-svg-icon";
import "../../components/sl-tab-group";
import type { LovelacePanelConfig } from "../../data/lovelace";
import type { HomeAssistant, PanelInfo } from "../../types";
import type { Lovelace } from "./types";
import "./views/hui-view";
import "./views/hui-view-container";
import "./views/hui-view-background";
declare class HUIRoot extends LitElement {
    panel?: PanelInfo<LovelacePanelConfig>;
    hass: HomeAssistant;
    lovelace?: Lovelace;
    narrow: boolean;
    route?: {
        path: string;
        prefix: string;
    };
    private _curView?;
    private _viewCache?;
    private _viewScrollPositions;
    private _restoreScroll;
    private _debouncedConfigChanged;
    private _conversation;
    constructor();
    private _renderActionItems;
    protected render(): TemplateResult;
    private _handleWindowScroll;
    private _handlePopState;
    private _isVisible;
    private _clearParam;
    protected firstUpdated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues): void;
    private get config();
    private get _yamlMode();
    private get _editMode();
    private get _viewRoot();
    private _handleRefresh;
    private _handleReloadResources;
    private _handleShowQuickBar;
    private _showQuickBar;
    private _goBack;
    private _handleRawEditor;
    private _handleManageDashboards;
    private _handleManageResources;
    private _handleUnusedEntities;
    private _handleShowVoiceCommandDialog;
    private _showVoiceCommandDialog;
    private _handleEnableEditMode;
    private _enableEditMode;
    private _editModeDisable;
    private _editDashboard;
    private _navigateToView;
    private _editView;
    private _moveViewLeft;
    private _moveViewRight;
    private _addView;
    private _handleViewSelected;
    private _selectView;
    private _openShortcutDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-root": HUIRoot;
    }
}
export {};
