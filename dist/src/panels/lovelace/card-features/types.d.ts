import type { AlarmMode } from "../../../data/alarm_control_panel";
import type { HvacMode } from "../../../data/climate";
import type { OperationMode } from "../../../data/water_heater";
export interface CoverOpenCloseCardFeatureConfig {
    type: "cover-open-close";
}
export interface CoverPositionCardFeatureConfig {
    type: "cover-position";
}
export interface CoverTiltCardFeatureConfig {
    type: "cover-tilt";
}
export interface CoverTiltPositionCardFeatureConfig {
    type: "cover-tilt-position";
}
export interface LightBrightnessCardFeatureConfig {
    type: "light-brightness";
}
export interface LightColorTempCardFeatureConfig {
    type: "light-color-temp";
}
export interface LockCommandsCardFeatureConfig {
    type: "lock-commands";
}
export interface LockOpenDoorCardFeatureConfig {
    type: "lock-open-door";
}
export interface MediaPlayerVolumeSliderCardFeatureConfig {
    type: "media-player-volume-slider";
}
export interface FanPresetModesCardFeatureConfig {
    type: "fan-preset-modes";
    style?: "dropdown" | "icons";
    preset_modes?: string[];
}
export interface FanSpeedCardFeatureConfig {
    type: "fan-speed";
}
export interface AlarmModesCardFeatureConfig {
    type: "alarm-modes";
    modes?: AlarmMode[];
}
export interface ClimateFanModesCardFeatureConfig {
    type: "climate-fan-modes";
    style?: "dropdown" | "icons";
    fan_modes?: string[];
}
export interface ClimateSwingModesCardFeatureConfig {
    type: "climate-swing-modes";
    style?: "dropdown" | "icons";
    swing_modes?: string[];
}
export interface ClimateSwingHorizontalModesCardFeatureConfig {
    type: "climate-swing-horizontal-modes";
    style?: "dropdown" | "icons";
    swing_horizontal_modes?: string[];
}
export interface ClimateHvacModesCardFeatureConfig {
    type: "climate-hvac-modes";
    style?: "dropdown" | "icons";
    hvac_modes?: HvacMode[];
}
export interface ClimatePresetModesCardFeatureConfig {
    type: "climate-preset-modes";
    style?: "dropdown" | "icons";
    preset_modes?: string[];
}
export declare const COUNTER_ACTIONS: readonly ["decrement", "reset", "increment"];
export type CounterActions = (typeof COUNTER_ACTIONS)[number];
export interface CounterActionsCardFeatureConfig {
    type: "counter-actions";
    actions?: CounterActions[];
}
export interface SelectOptionsCardFeatureConfig {
    type: "select-options";
    options?: string[];
}
export interface NumericInputCardFeatureConfig {
    type: "numeric-input";
    style?: "buttons" | "slider";
}
export interface TargetHumidityCardFeatureConfig {
    type: "target-humidity";
}
export interface TargetTemperatureCardFeatureConfig {
    type: "target-temperature";
}
export interface ToggleCardFeatureConfig {
    type: "toggle";
}
export interface WaterHeaterOperationModesCardFeatureConfig {
    type: "water-heater-operation-modes";
    operation_modes?: OperationMode[];
}
export interface HumidifierModesCardFeatureConfig {
    type: "humidifier-modes";
    style?: "dropdown" | "icons";
    modes?: string[];
}
export interface HumidifierToggleCardFeatureConfig {
    type: "humidifier-toggle";
}
export declare const VACUUM_COMMANDS: readonly ["start_pause", "stop", "clean_spot", "locate", "return_home"];
export type VacuumCommand = (typeof VACUUM_COMMANDS)[number];
export interface VacuumCommandsCardFeatureConfig {
    type: "vacuum-commands";
    commands?: VacuumCommand[];
}
export declare const LAWN_MOWER_COMMANDS: readonly ["start_pause", "dock"];
export type LawnMowerCommand = (typeof LAWN_MOWER_COMMANDS)[number];
export interface LawnMowerCommandsCardFeatureConfig {
    type: "lawn-mower-commands";
    commands?: LawnMowerCommand[];
}
export interface UpdateActionsCardFeatureConfig {
    type: "update-actions";
    backup?: "yes" | "no" | "ask";
}
export type LovelaceCardFeatureConfig = AlarmModesCardFeatureConfig | ClimateFanModesCardFeatureConfig | ClimateSwingModesCardFeatureConfig | ClimateSwingHorizontalModesCardFeatureConfig | ClimateHvacModesCardFeatureConfig | ClimatePresetModesCardFeatureConfig | CounterActionsCardFeatureConfig | CoverOpenCloseCardFeatureConfig | CoverPositionCardFeatureConfig | CoverTiltPositionCardFeatureConfig | CoverTiltCardFeatureConfig | FanPresetModesCardFeatureConfig | FanSpeedCardFeatureConfig | HumidifierToggleCardFeatureConfig | HumidifierModesCardFeatureConfig | LawnMowerCommandsCardFeatureConfig | LightBrightnessCardFeatureConfig | LightColorTempCardFeatureConfig | LockCommandsCardFeatureConfig | LockOpenDoorCardFeatureConfig | MediaPlayerVolumeSliderCardFeatureConfig | NumericInputCardFeatureConfig | SelectOptionsCardFeatureConfig | TargetHumidityCardFeatureConfig | TargetTemperatureCardFeatureConfig | ToggleCardFeatureConfig | UpdateActionsCardFeatureConfig | VacuumCommandsCardFeatureConfig | WaterHeaterOperationModesCardFeatureConfig;
export interface LovelaceCardFeatureContext {
    entity_id?: string;
}
