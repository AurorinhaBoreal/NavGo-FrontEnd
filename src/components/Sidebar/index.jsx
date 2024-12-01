import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { GoGear } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { TbFileExport } from "react-icons/tb";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import styles from "./sidebar.module.css"
import { Link } from "react-router-dom";
import DeskTool from "./DeskTool";
import MobiTool from "./MobiTool";
import ModalStructure from '../ModalStructure'
import DashboardAlert from "../ModalBody/DashboardAlert";

const Sidebar = () => {
    const {isOpen, onOpen, onClose } = useDisclosure()
    const [modalContent, setModalContent] = useState(<></>);
    const [modalTitle, setModalTitle] = useState("")

    const openModal = (content, title) => {
        setModalContent(content);
        setModalTitle(title)
        onOpen();
    };

    return (
        <>
        {innerWidth>=601 ? (
            <Box className={styles.sidebar}>
                <Box className={styles.logoWrapper}>
                    <Link to="/">
                        <Image className={styles.navLogo} src='/images/navgo-logo.png'/>
                    </Link>
                </Box>
                <Box>
                    <hr className={styles.sidebarDivider}/>
                    <Flex flexDirection="column" gap="2vh">
                        <DeskTool ToolIcon={MdHomeFilled} linkTo="/subhome"/>
                    </Flex>
                    <hr className={styles.sidebarDivider}/>
                    <Flex flexDirection="column" gap="2vh">
                        <DeskTool ToolIcon={TbFileExport} linkTo="/mural"/>
                        <DeskTool ToolIcon={PiMapPinLineBold} linkTo="/map"/>
                    </Flex>
                </Box>
                <Box mt={"auto"}>
                    <hr className={styles.sidebarDivider}/>
                    <Flex flexDirection="column" gap="2vh">
                        <DeskTool ToolIcon={GoGear} linkTo="/dashboard"/>
                        <DeskTool ToolIcon={CiCircleInfo} linkTo="/sobre"/>
                    </Flex>
                </Box>
            </Box>
        ) : (
        <>
        <ModalStructure
                isOpen={isOpen}
                onClose={onClose}
                title={modalTitle}
                contentBody={modalContent}
            />
        <Flex justifyContent="space-between">
            <Flex className={styles.normalWrapper}>
                <Flex className={styles.toolsBar}>
                    <MobiTool ToolIcon={PiMapPinLineBold} toolSize={"8vw"} linkTo="/map"/>
                    <MobiTool ToolIcon={MdHomeFilled} toolSize={"6vw"} linkTo="/subhome"/>
                    <Link to="/">
                        <Image className={styles.mobileLogo} src='/images/navgo-logo.png'/>
                    </Link>
                    <GoGear size={"6vw"} onClick={() => openModal(<DashboardAlert/>, "Acesso Barrado!")}/>
                    <MobiTool ToolIcon={TbFileExport} toolSize={"8vw"} linkTo="/mural"/>
                </Flex>
            </Flex>            
        </Flex>
        </>
        )}
        </>
    )
}

export default Sidebar;