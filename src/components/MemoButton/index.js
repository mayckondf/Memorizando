import React from 'react';
import PropTypes from 'prop-types';
import MemoText from '../MemoText';
import {
  ContainerNormal,
  ContainerOnlyText,
  ContainerOutlined,
  StyledActivity,
} from './styles';

const ButtonOutlined = ({ children, loading, guide, ...props }) => {
  return (
    <ContainerOutlined {...props}>
      {loading && <StyledActivity color="secondary1" />}
      {!loading && (
        <MemoText color={props.color} guide={guide}>
          {children}
        </MemoText>
      )}
    </ContainerOutlined>
  );
};

const ButtonOnlyText = ({ children, loading, guide, ...props }) => {
  return (
    <ContainerOnlyText {...props}>
      {loading && <StyledActivity color={props.color} />}
      {!loading && (
        <MemoText
          color={props.disabled ? 'secondary1' : props.color}
          guide={guide}>
          {children}
        </MemoText>
      )}
    </ContainerOnlyText>
  );
};

const ButtonNormal = ({ children, loading, guide, ...props }) => {
  return (
    <ContainerNormal {...props}>
      {loading && <StyledActivity />}
      {!loading && (
        <MemoText color="white" guide={guide}>
          {children}
        </MemoText>
      )}
    </ContainerNormal>
  );
};

const MemoButton = ({ onlyText, outlined, ...props }) => {
  const disabled = props?.loading || props?.disabled;

  if (outlined) return <ButtonOutlined {...props} disabled={disabled} />;
  if (onlyText) return <ButtonOnlyText {...props} disabled={disabled} />;

  return <ButtonNormal {...props} disabled={disabled} />;
};

const propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onlyText: PropTypes.bool,
  outlined: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string,
  guide: PropTypes.string,
};

const defaultProps = {
  loading: false,
  disabled: false,
  onlyText: false,
  outlined: false,
  children: undefined,
  color: 'primary4',
  guide: 'button',
};

ButtonOnlyText.defaultProps = {
  ...defaultProps,
  guide: 'buttonOnlyText',
};

MemoButton.defaultProps = defaultProps;
MemoButton.propTypes = propTypes;
ButtonOutlined.propTypes = propTypes;
ButtonOutlined.defaultProps = defaultProps;
ButtonOnlyText.propTypes = propTypes;
ButtonNormal.defaultProps = defaultProps;
ButtonNormal.propTypes = propTypes;

export default MemoButton;
