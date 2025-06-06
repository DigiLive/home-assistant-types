import type { HassEntityAttributeBase, HassEntityBase, HassServiceTarget } from "home-assistant-js-websocket";
import type { Describe } from "superstruct";
import type { HomeAssistant } from "../types";
import type { Condition, ShorthandAndCondition, ShorthandNotCondition, ShorthandOrCondition, Trigger } from "./automation";
import type { BlueprintInput } from "./blueprint";
export declare const MODES: readonly ["single", "restart", "queued", "parallel"];
export declare const MODES_MAX: readonly ["queued", "parallel"];
export declare const isMaxMode: (searchElement: unknown, fromIndex?: number) => searchElement is "parallel" | "queued";
export declare const baseActionStruct: import("superstruct").Struct<{
    enabled?: boolean | undefined;
    alias?: string | undefined;
    continue_on_error?: boolean | undefined;
}, {
    alias: import("superstruct").Struct<string | undefined, null>;
    continue_on_error: import("superstruct").Struct<boolean | undefined, null>;
    enabled: import("superstruct").Struct<boolean | undefined, null>;
}>;
export declare const targetStruct: import("superstruct").Struct<{
    device_id?: string | string[] | undefined;
    floor_id?: string | string[] | undefined;
    area_id?: string | string[] | undefined;
    entity_id?: string | string[] | undefined;
    label_id?: string | string[] | undefined;
}, {
    entity_id: import("superstruct").Struct<string | string[] | undefined, null>;
    device_id: import("superstruct").Struct<string | string[] | undefined, null>;
    area_id: import("superstruct").Struct<string | string[] | undefined, null>;
    floor_id: import("superstruct").Struct<string | string[] | undefined, null>;
    label_id: import("superstruct").Struct<string | string[] | undefined, null>;
}>;
export declare const serviceActionStruct: Describe<ServiceAction>;
export interface ScriptEntity extends HassEntityBase {
    attributes: HassEntityAttributeBase & {
        last_triggered: string;
        mode: (typeof MODES)[number];
        current?: number;
        max?: number;
    };
}
export type ScriptConfig = ManualScriptConfig | BlueprintScriptConfig;
export interface ManualScriptConfig {
    alias: string;
    description?: string;
    sequence: Action | Action[];
    icon?: string;
    mode?: (typeof MODES)[number];
    max?: number;
    fields?: Fields;
}
export interface BlueprintScriptConfig extends ManualScriptConfig {
    use_blueprint: {
        path: string;
        input?: BlueprintInput;
    };
}
export type Fields = Record<string, Field>;
export interface Field {
    name?: string;
    description?: string;
    advanced?: boolean;
    required?: boolean;
    example?: string;
    default?: any;
    selector?: any;
}
interface BaseAction {
    alias?: string;
    continue_on_error?: boolean;
    enabled?: boolean;
}
export interface EventAction extends BaseAction {
    event: string;
    event_data?: Record<string, any>;
    event_data_template?: Record<string, any>;
}
export interface ServiceAction extends BaseAction {
    action?: string;
    service_template?: string;
    entity_id?: string;
    target?: HassServiceTarget;
    data?: Record<string, unknown>;
    response_variable?: string;
    metadata?: Record<string, unknown>;
}
export interface DeviceAction extends BaseAction {
    type: string;
    device_id: string;
    domain: string;
    entity_id: string;
}
export interface DelayActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
export interface DelayAction extends BaseAction {
    delay: number | Partial<DelayActionParts> | string;
}
export interface WaitAction extends BaseAction {
    wait_template: string;
    timeout?: number;
    continue_on_timeout?: boolean;
}
export interface WaitForTriggerActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
export interface WaitForTriggerAction extends BaseAction {
    wait_for_trigger: Trigger | Trigger[];
    timeout?: number | Partial<WaitForTriggerActionParts> | string;
    continue_on_timeout?: boolean;
}
export interface PlayMediaAction extends BaseAction {
    action: "media_player.play_media";
    target?: {
        entity_id?: string;
    };
    entity_id?: string;
    data: {
        media_content_id: string;
        media_content_type: string;
    };
    metadata: Record<string, unknown>;
}
export interface RepeatAction extends BaseAction {
    repeat: CountRepeat | WhileRepeat | UntilRepeat | ForEachRepeat;
}
interface BaseRepeat extends BaseAction {
    sequence: Action | Action[];
}
export interface CountRepeat extends BaseRepeat {
    count: number | string;
}
export interface WhileRepeat extends BaseRepeat {
    while: Condition[];
}
export interface UntilRepeat extends BaseRepeat {
    until: Condition[];
}
export interface ForEachRepeat extends BaseRepeat {
    for_each: string | any[];
}
export interface Option {
    alias?: string;
    conditions: string | Condition[];
    sequence: Action | Action[];
}
export interface ChooseAction extends BaseAction {
    choose: Option | Option[] | null;
    default?: Action | Action[];
}
export interface IfAction extends BaseAction {
    if: string | Condition[];
    then: Action | Action[];
    else?: Action | Action[];
}
export interface VariablesAction extends BaseAction {
    variables: Record<string, unknown>;
}
export interface StopAction extends BaseAction {
    stop: string;
    response_variable?: string;
    error?: boolean;
}
export interface SequenceAction extends BaseAction {
    sequence: (ManualScriptConfig | Action)[];
}
export interface ParallelAction extends BaseAction {
    parallel: ManualScriptConfig | Action | (ManualScriptConfig | Action)[];
}
export interface SetConversationResponseAction extends BaseAction {
    set_conversation_response: string;
}
interface UnknownAction extends BaseAction, Record<string, unknown> {
}
export type NonConditionAction = EventAction | DeviceAction | ServiceAction | DelayAction | WaitAction | WaitForTriggerAction | RepeatAction | ChooseAction | IfAction | VariablesAction | PlayMediaAction | StopAction | SequenceAction | ParallelAction | UnknownAction;
export type Action = NonConditionAction | Condition | ShorthandAndCondition | ShorthandOrCondition | ShorthandNotCondition;
export interface ActionTypes {
    delay: DelayAction;
    wait_template: WaitAction;
    check_condition: Condition;
    fire_event: EventAction;
    device_action: DeviceAction;
    repeat: RepeatAction;
    choose: ChooseAction;
    if: IfAction;
    wait_for_trigger: WaitForTriggerAction;
    variables: VariablesAction;
    service: ServiceAction;
    play_media: PlayMediaAction;
    stop: StopAction;
    sequence: SequenceAction;
    parallel: ParallelAction;
    set_conversation_response: SetConversationResponseAction;
    unknown: UnknownAction;
}
export type ActionType = keyof ActionTypes;
export declare const triggerScript: (hass: HomeAssistant, scriptId: string, variables?: Record<string, unknown>) => Promise<import("../types").ServiceCallResponse>;
export declare const canRun: (state: ScriptEntity) => boolean;
export declare const deleteScript: (hass: HomeAssistant, objectId: string) => Promise<unknown>;
export declare const fetchScriptFileConfig: (hass: HomeAssistant, objectId: string) => Promise<ScriptConfig>;
export declare const getScriptStateConfig: (hass: HomeAssistant, entity_id: string) => Promise<{
    config: ScriptConfig;
}>;
export declare const showScriptEditor: (data?: Partial<ScriptConfig>, expanded?: boolean) => void;
export declare const getScriptEditorInitData: () => Partial<ScriptConfig> | undefined;
export declare const getActionType: (action: Action) => ActionType;
export declare const hasScriptFields: (hass: HomeAssistant, entityId: string) => boolean;
export declare const migrateAutomationAction: (action: Action | Action[]) => Action | Action[];
export declare const normalizeScriptConfig: (config: ScriptConfig) => ScriptConfig;
export {};
