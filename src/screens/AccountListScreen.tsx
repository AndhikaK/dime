import { ScrollView, View } from "react-native";

import { Appbar } from "@/components/Appbar";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { TabScreenProps } from "@/navigations/types";

type AccountListScreenProps = TabScreenProps<"/main/account-list">;
const AccountListScreen = ({ navigation }: AccountListScreenProps) => {
  const navigateToAddAccount = () => {
    navigation.navigate("/accounts/add");
  };

  return (
    <View>
      <Appbar
        goBack={false}
        title="Keuangan"
        actionComponent={
          <Button
            label="Add"
            icon={<Icon name="plus-circle" color={"green"} size={18} />}
            onPress={navigateToAddAccount}
          />
        }
      />

      <ScrollView>
        <View style={{ width: "100%", height: 200, backgroundColor: "red" }} />
      </ScrollView>
    </View>
  );
};

export default AccountListScreen;
