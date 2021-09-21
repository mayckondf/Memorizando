import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actions-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addUser, selectUser } from '~/store/reducers/user';
import MemoButton from '../MemoButton';
import MemoText from '../MemoText';
import { Container, Input, FlatList, Divider, UserButton } from './styles';

const UserModal = ({ modalRef }) => {
  const { users } = useSelector((state) => state.user);
  const [userName, setUserName] = useState();
  const [creating, setCreating] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const createUser = () => {
    dispatch(addUser({ name: userName }));
    setUserName('');
    setCreating(false);
    modalRef.current?.hide();
  };

  const choiceUser = (user) => {
    dispatch(selectUser(user));
    modalRef.current?.hide();
  };

  useEffect(() => {
    if (users.length === 0) setCreating(true);
  }, [creating]);

  return (
    <ActionSheet
      ref={modalRef}
      containerStyle={{ padding: 0, margin: 0 }}
      closeOnTouchBackdrop={users.length > 0}
      keyboardShouldPersistTaps="handled">
      <Container>
        {!creating && (
          <>
            <MemoText guide="CardDescription">
              {t('USER_MODAL.USERS_TITLE')}
            </MemoText>
            <Divider />
            <FlatList
              data={users}
              ListFooterComponent={() => (
                <>
                  <Divider />
                  <MemoButton onPress={() => setCreating(true)}>
                    {t('USER_MODAL.GO_TO_ADD_USER')}
                  </MemoButton>
                </>
              )}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <UserButton key={item.id} onPress={() => choiceUser(item)}>
                  <MemoText guide="cardTitle">{item.name}</MemoText>
                </UserButton>
              )}
            />
          </>
        )}
        {creating && (
          <>
            <MemoText guide="cardTitle" alignSelf pVertical={16}>
              {t('USER_MODAL.CREATE_USER_TITLE')}
            </MemoText>
            <Input
              placeholder={t('USER_MODAL.USER_NAME_PLACEHOLDER')}
              value={userName}
              onChangeText={setUserName}
              onSubmitEditing={() => {
                if (userName) createUser();
              }}
            />
            <MemoButton disabled={!userName} onPress={createUser}>
              {t('USER_MODAL.CREATE')}
            </MemoButton>
          </>
        )}
      </Container>
    </ActionSheet>
  );
};

UserModal.propTypes = {
  modalRef: PropTypes.any.isRequired,
};

export default UserModal;
