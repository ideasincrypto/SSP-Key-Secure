import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

const ManualInput = (props: { actionStatus: (data: string) => void }) => {
  const { t } = useTranslation(['home', 'common']);
  const { Fonts, Gutters, Layout, Common } = useTheme();

  const openManualInput = () => {
    props.actionStatus('manualinput');
  };
  const openAddressDetails = () => {
    props.actionStatus('addressdetails');
  };
  const openSSPKeyDetails = () => {
    props.actionStatus('sspkeydetails');
  };
  const openMenuSettings = () => {
    props.actionStatus('menusettings');
  };
  const handleRestore = () => {
    props.actionStatus('restore');
  };
  const handleCancel = () => {
    props.actionStatus('cancel');
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={() => {
        handleCancel();
      }}
      transparent={true}
      visible={true}
    >
      <TouchableWithoutFeedback
        onPressIn={() => {
          handleCancel();
        }}
      >
        <SafeAreaView style={[Layout.fill]}>
          <View>
            <View style={[Common.modalMenu]}>
              <TouchableOpacity onPressIn={() => openManualInput()}>
                <Text
                  style={[
                    Fonts.textSmall,
                    Fonts.textBluePrimary,
                    Fonts.textCenter,
                    Gutters.tinyPadding,
                  ]}
                >
                  {t('home:manual_input')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPressIn={() => openAddressDetails()}>
                <Text
                  style={[
                    Fonts.textSmall,
                    Fonts.textBluePrimary,
                    Fonts.textCenter,
                    Gutters.tinyPadding,
                  ]}
                >
                  {t('home:synced_ssp_address')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPressIn={() => openSSPKeyDetails()}>
                <Text
                  style={[
                    Fonts.textSmall,
                    Fonts.textBluePrimary,
                    Fonts.textCenter,
                    Gutters.tinyPadding,
                  ]}
                >
                  {t('home:ssp_key_details')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPressIn={() => openMenuSettings()}>
                <Text
                  style={[
                    Fonts.textSmall,
                    Fonts.textBluePrimary,
                    Fonts.textCenter,
                    Gutters.tinyPadding,
                  ]}
                >
                  {t('common:settings')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPressIn={() => handleRestore()}>
                <Text
                  style={[
                    Fonts.textSmall,
                    Fonts.textBluePrimary,
                    Fonts.textCenter,
                    Gutters.tinyPadding,
                  ]}
                >
                  {t('common:restore')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ManualInput;
