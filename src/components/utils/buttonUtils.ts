import { BUTTON_STYLES } from '../styles/buttonStyles';
import { CloseIcon } from '../../assets/CloseIcon';
import { SearchIcon } from '../../assets/SearchIcon';
import { ResetIcon } from '../../assets/ResetIcon';
import { CheckIcon } from '../../assets/CheckIcon';
import { ArrowRightIcon } from '../../assets/ArrowRightIcon';
import { PlayIcon } from '../../assets/PlayIcon';

// Common button prop generators using centralized styles

// Close button props
export const getCloseButtonProps = (onClick: () => void) => ({
  icon: CloseIcon,
  iconColor: BUTTON_STYLES.colors.icon.white,
  iconHoverColor: BUTTON_STYLES.colors.icon.white,
  isSolid: false,
  bgColor: BUTTON_STYLES.colors.transparent.primary,
  hoverBgColor: BUTTON_STYLES.colors.transparent.primary,
  border: BUTTON_STYLES.borders.none,
  borderHoverColor: BUTTON_STYLES.borders.none,
  className: BUTTON_STYLES.base.container,
  onClick,
  disabled: false
});

// Search button props
export const getSearchButtonProps = () => ({
  icon: SearchIcon,
  iconColor: BUTTON_STYLES.colors.icon.gray,
  inputBg: BUTTON_STYLES.colors.input.white,
  inputHoverBg: BUTTON_STYLES.colors.input.whiteHover,
  border: "border-2",
  borderColor: "border-white/20",
  borderHoverColor: "border-sera-pink/50"
});

// Reset button props
export const getResetButtonProps = (onClick: () => void) => ({
  text: "Reset",
  leftIcon: ResetIcon,
  leftIconColor: BUTTON_STYLES.colors.icon.white,
  leftIconHoverColor: BUTTON_STYLES.colors.icon.white,
  isSolid: false,
  bgColor: BUTTON_STYLES.colors.transparent.white,
  hoverBgColor: BUTTON_STYLES.colors.transparent.white,
  border: "border-2",
  borderHoverColor: "border-white/50",
  textColor: BUTTON_STYLES.colors.text.white,
  textHoverColor: BUTTON_STYLES.colors.text.white,
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.icon.space} ${BUTTON_STYLES.borders.white}`,
  onClick,
  disabled: false
});

// Apply button props
export const getApplyButtonProps = (onClick: () => void) => ({
  text: "Apply Filters",
  leftIcon: CheckIcon,
  leftIconColor: BUTTON_STYLES.colors.icon.white,
  leftIconHoverColor: BUTTON_STYLES.colors.icon.white,
  isSolid: true,
  bgColor: BUTTON_STYLES.colors.solid.pink,
  hoverBgColor: "hover:from-sera-pink/90 hover:to-sera-orange/90",
  border: BUTTON_STYLES.borders.none,
  borderHoverColor: BUTTON_STYLES.borders.none,
  textColor: BUTTON_STYLES.colors.text.white,
  textHoverColor: BUTTON_STYLES.colors.text.white,
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.icon.space}`,
  onClick,
  disabled: false
});

// Login button props
export const getLoginButtonProps = (onClick: () => void) => ({
  text: "Login",
  textColor: BUTTON_STYLES.colors.text.white,
  textHoverColor: BUTTON_STYLES.colors.text.white,
  isSolid: false,
  bgColor: BUTTON_STYLES.colors.transparent.pink,
  hoverBgColor: BUTTON_STYLES.colors.transparent.pink,
  border: BUTTON_STYLES.borders.none,
  borderHoverColor: BUTTON_STYLES.borders.none,
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.padding.small} ${BUTTON_STYLES.sizes.small}`,
  onClick,
  disabled: false
});

// Register button props
export const getRegisterButtonProps = (onClick: () => void) => ({
  text: "Register",
  textColor: BUTTON_STYLES.colors.text.black,
  textHoverColor: BUTTON_STYLES.colors.text.black,
  isSolid: true,
  bgColor: "bg-yellow-400",
  hoverBgColor: "hover:bg-yellow-500",
  border: BUTTON_STYLES.borders.none,
  borderHoverColor: BUTTON_STYLES.borders.none,
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.padding.small} ${BUTTON_STYLES.sizes.small}`,
  onClick,
  disabled: false
});

// Hero section primary button props
export const getHeroPrimaryButtonProps = (onClick: () => void) => ({
  text: "Get Started",
  rightIcon: ArrowRightIcon,
  rightIconColor: BUTTON_STYLES.colors.icon.dark,
  rightIconHoverColor: BUTTON_STYLES.colors.icon.dark,
  isSolid: true,
  bgColor: BUTTON_STYLES.colors.solid.yellow,
  hoverBgColor: BUTTON_STYLES.colors.solid.yellow,
  border: BUTTON_STYLES.borders.none,
  borderHoverColor: BUTTON_STYLES.borders.none,
  textColor: BUTTON_STYLES.colors.text.dark,
  textHoverColor: BUTTON_STYLES.colors.text.dark,
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.icon.space}`,
  onClick,
  disabled: false
});

// Hero section secondary button props
export const getHeroSecondaryButtonProps = (onClick: () => void) => ({
  text: "Watch Demo",
  leftIcon: PlayIcon,
  leftIconColor: BUTTON_STYLES.colors.icon.yellow,
  leftIconHoverColor: BUTTON_STYLES.colors.icon.dark,
  isSolid: false,
  bgColor: "bg-transparent",
  hoverBgColor: "hover:bg-sera-yellow",
  border: BUTTON_STYLES.borders.yellow,
  borderHoverColor: BUTTON_STYLES.borders.yellow,
  textColor: BUTTON_STYLES.colors.text.yellow,
  textHoverColor: "hover:text-dark-900",
  className: `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.icon.space}`,
  onClick,
  disabled: false
});