import { Card, List, ListItem, Text } from "@tremor/react"
import { SettingLanguage } from "../components/Settings/Language"


export const SettingsPage =  () =>{
    return (<>
        <div className="flex gap-2">
            <Card className="w-1/4">
                <Text>Settings</Text>
                <List className="flex shrink flex-col">
                    <ListItem>
                        <a href="">Account</a>
                    </ListItem>
                    <ListItem>
                        <a href="">Locale</a>
                    </ListItem>
                </List>
            </Card>
            <Card className="grow">
                <div><SettingLanguage/></div>
            </Card>
        </div>
    </>)
}