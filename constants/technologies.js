import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiJava, DiLaravel, DiPhp, DiSymfony, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaNodeJs } from "react-icons/fa";
import { BsAndroid, BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [{ name: "Android Studio", icon: <BsAndroid size={32} /> }]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next.js", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Ant Design", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Material UI", icon: <MuiIcon /> },
			{ name: "Styled Components", icon: <StyledIcon /> },
			{ name: "Headless UI", icon: <HeadlessUiIcon /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", icon: <FaNodeJs size={32} /> },
			{ name: "Spring Boot", icon: <DiJava size={32} /> },
			{ name: "Laravel", icon: <DiLaravel size={32} /> },
			{ name: "PHP", icon: <DiPhp size={32} /> },
			{ name: "Symfony", icon: <DiSymfony size={32} /> }
		]
	},

	{
		category: "Other tools",
		items: [
			{ name: "Jira", icon: <JiraIcon /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Visual Studio Code", icon: <DiVisualstudio size={32} /> }
		]
	}
];
