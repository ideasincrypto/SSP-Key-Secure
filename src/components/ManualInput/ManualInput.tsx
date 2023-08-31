import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

const ManualInput = (props: { actionStatus: (data: string) => void }) => {
  const textInputA = useRef<TextInput | null>(null);
  const { t } = useTranslation(['home', 'common']);
  const { darkMode, Fonts, Gutters, Layout, Common } = useTheme();
  const [manualInput, setManualInput] = useState('');

  const handleMnualInput = () => {
    props.actionStatus(manualInput);
    setTimeout(() => {
      setManualInput('');
    }, 100);
  };
  const handleCancel = () => {
    props.actionStatus('cancel');
    setManualInput('');
  };
  const onChangeManualInput = (text: string) => {
    setManualInput(text);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => handleCancel()}
    >
      <KeyboardAwareScrollView
        extraScrollHeight={20}
        style={[Layout.fill, Common.modalBackdrop]}
        contentContainerStyle={[
          Gutters.smallBPadding,
          Layout.scrollSpaceBetween,
          Common.modalView,
        ]}
      >
        <Text style={[Fonts.titleSmall, Gutters.tinyBMargin, Fonts.textCenter]}>
          {t('home:manual_input')}
        </Text>
        <View
          style={[
            Layout.fill,
            Layout.relative,
            Layout.fullWidth,
            Layout.alignItemsCenter,
            Gutters.regularTMargin,
          ]}
        >
          <Text
            style={[
              Fonts.textRegular,
              Fonts.textCenter,
              Fonts.textBold,
              Gutters.tinyBMargin,
            ]}
          >
            {t('home:sign_resync')}
          </Text>
          <View style={styles.seedPhraseArea}>
            <TextInput
              multiline={true}
              numberOfLines={6}
              style={[Common.inputArea, Common.inputAreaModalColors]}
              autoCapitalize="none"
              placeholder="Input your transaction to sign or xpub of your wallet to sync."
              placeholderTextColor={darkMode ? '#777' : '#c7c7c7'}
              secureTextEntry={false}
              onChangeText={onChangeManualInput}
              value={manualInput}
              autoCorrect={false}
              ref={textInputA}
              onPressIn={() => textInputA.current?.focus()}
            />
          </View>
        </View>
        <View style={[Layout.justifyContentEnd]}>
          <TouchableOpacity
            style={[
              Common.button.rounded,
              Common.button.bluePrimary,
              Gutters.regularBMargin,
              Gutters.smallTMargin,
            ]}
            onPressIn={() => handleMnualInput()}
          >
            <Text style={[Fonts.textRegular, Fonts.textWhite]}>
              {t('home:process_input')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => handleCancel()}>
            <Text
              style={[Fonts.textSmall, Fonts.textBluePrimary, Fonts.textCenter]}
            >
              {t('common:cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  );
};

export default ManualInput;

const styles = StyleSheet.create({
  seedPhraseArea: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
});
