import React from "react";
import {
  Category,
  Component,
  Palette,
  Variant,
} from "@react-buddy/ide-toolbox";
import {
  AndroidOutlined,
  AppleOutlined,
  AppstoreOutlined,
  CaretRightOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FrownFilled,
  FrownOutlined,
  HomeOutlined,
  LikeOutlined,
  LoadingOutlined,
  MailOutlined,
  MehOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  YoutubeOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  ForwardOutlined,
  BackwardOutlined,
  RollbackOutlined,
  EnterOutlined,
  RetweetOutlined,
  SwapOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderBottomOutlined,
  BorderHorizontalOutlined,
  BorderInnerOutlined,
  BorderOuterOutlined,
  BorderLeftOutlined,
  BorderRightOutlined,
  BorderTopOutlined,
  BorderVerticleOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  QuestionOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoOutlined,
  InfoCircleOutlined,
  ExclamationOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  StopOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  DashOutlined,
  SmallDashOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DragOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  RadiusSettingOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BellOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BorderlessTableOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CameraOutlined,
  CarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  CiOutlined,
  ClearOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CloudSyncOutlined,
  CloudUploadOutlined,
  ClusterOutlined,
  CodeOutlined,
  CoffeeOutlined,
  CommentOutlined,
  CompassOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CopyrightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteColumnOutlined,
  DeleteRowOutlined,
  DeliveredProcedureOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  DisconnectOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  EuroOutlined,
  ExceptionOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  ExperimentOutlined,
  ExportOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileExclamationOutlined,
  FileOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FilterOutlined,
  FireOutlined,
  FlagOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  ForkOutlined,
  FormatPainterOutlined,
  FunctionOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  FunnelPlotOutlined,
  GatewayOutlined,
  GifOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  GroupOutlined,
  HddOutlined,
  HeartOutlined,
  HistoryOutlined,
  HolderOutlined,
  HourglassOutlined,
  IdcardOutlined,
  ImportOutlined,
  InboxOutlined,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  InsuranceOutlined,
  InteractionOutlined,
  KeyOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LineOutlined,
  LinkOutlined,
  Loading3QuartersOutlined,
  LockOutlined,
  MacCommandOutlined,
  ManOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
  MergeCellsOutlined,
  MessageOutlined,
  MobileOutlined,
  MoneyCollectOutlined,
  MonitorOutlined,
  MoreOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined,
  NodeIndexOutlined,
  NumberOutlined,
  OneToOneOutlined,
  PartitionOutlined,
  PaperClipOutlined,
  PayCircleOutlined,
  PercentageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PoundCircleOutlined,
  PoweroffOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PropertySafetyOutlined,
  PullRequestOutlined,
  PushpinOutlined,
  QrcodeOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RedEnvelopeOutlined,
  ReloadOutlined,
  RestOutlined,
  RobotOutlined,
  RocketOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SaveOutlined,
  ScanOutlined,
  ScheduleOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SendOutlined,
  ShakeOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SisternodeOutlined,
  SkinOutlined,
  SoundOutlined,
  SplitCellsOutlined,
  StarOutlined,
  SubnodeOutlined,
  SwitcherOutlined,
  SyncOutlined,
  TableOutlined,
  TabletOutlined,
  TagOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  ToolOutlined,
  TrademarkCircleOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  TranslationOutlined,
  TrophyOutlined,
  UngroupOutlined,
  UnlockOutlined,
  UploadOutlined,
  UsbOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WhatsAppOutlined,
  WifiOutlined,
  WomanOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  FastBackwardFilled,
  FastForwardFilled,
  CaretUpFilled,
  CaretDownFilled,
  CaretLeftFilled,
  CaretRightFilled,
  UpCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  ForwardFilled,
  BackwardFilled,
  PlayCircleFilled,
  UpSquareFilled,
  DownSquareFilled,
  LeftSquareFilled,
  RightSquareFilled,
  QuestionCircleFilled,
  PlusCircleFilled,
  PauseCircleFilled,
  MinusCircleFilled,
  PlusSquareFilled,
  MinusSquareFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseSquareFilled,
  CheckCircleFilled,
  CheckSquareFilled,
  ClockCircleFilled,
  WarningFilled,
  StopFilled,
  EditFilled,
  CopyFilled,
  DeleteFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled,
  PieChartFilled,
  BoxPlotFilled,
  FundFilled,
  SlidersFilled,
  AndroidFilled,
  AppleFilled,
  WindowsFilled,
  ChromeFilled,
  GithubFilled,
  AliwangwangFilled,
  WeiboSquareFilled,
  WeiboCircleFilled,
  TaobaoCircleFilled,
  Html5Filled,
  WechatFilled,
  YoutubeFilled,
  AlipayCircleFilled,
  SkypeFilled,
  GitlabFilled,
  LinkedinFilled,
  FacebookFilled,
  CodeSandboxCircleFilled,
  CodepenCircleFilled,
  SlackSquareFilled,
  BehanceSquareFilled,
  DribbbleSquareFilled,
  InstagramFilled,
  YuqueFilled,
  YahooFilled,
  AccountBookFilled,
  AlertFilled,
  AlipaySquareFilled,
  AmazonCircleFilled,
  ApiFilled,
  AppstoreFilled,
  AudioFilled,
  BankFilled,
  BehanceCircleFilled,
  BellFilled,
  BookFilled,
  BugFilled,
  BuildFilled,
  CalculatorFilled,
  CalendarFilled,
  CameraFilled,
  CarFilled,
  CarryOutFilled,
  CiCircleFilled,
  CloudFilled,
  CodeFilled,
  CodeSandboxSquareFilled,
  CodepenSquareFilled,
  CompassFilled,
  ContactsFilled,
  ContainerFilled,
  ControlFilled,
  CreditCardFilled,
  CrownFilled,
  CustomerServiceFilled,
  DashboardFilled,
  DatabaseFilled,
  DingtalkCircleFilled,
  DingtalkSquareFilled,
  DislikeFilled,
  DollarCircleFilled,
  DribbbleCircleFilled,
  DropboxCircleFilled,
  DropboxSquareFilled,
  EnvironmentFilled,
  EuroCircleFilled,
  ExperimentFilled,
  EyeFilled,
  EyeInvisibleFilled,
  FileAddFilled,
  FileExcelFilled,
  FileExclamationFilled,
  FileFilled,
  FileImageFilled,
  FileMarkdownFilled,
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  FileUnknownFilled,
  FileWordFilled,
  FileZipFilled,
  FilterFilled,
  FireFilled,
  FlagFilled,
  FolderAddFilled,
  FolderFilled,
  FolderOpenFilled,
  FormatPainterFilled,
  FunnelPlotFilled,
  GiftFilled,
  GoldFilled,
  GoldenFilled,
  GoogleCircleFilled,
  GooglePlusCircleFilled,
  GooglePlusSquareFilled,
  GoogleSquareFilled,
  HddFilled,
  HeartFilled,
  HomeFilled,
  HourglassFilled,
  IdcardFilled,
  IeCircleFilled,
  IeSquareFilled,
  InsuranceFilled,
  InteractionFilled,
  LayoutFilled,
  LikeFilled,
  LockFilled,
  MacCommandFilled,
  MailFilled,
  MedicineBoxFilled,
  MediumCircleFilled,
  MediumSquareFilled,
  MehFilled,
  MessageFilled,
  MobileFilled,
  MoneyCollectFilled,
  NotificationFilled,
  PayCircleFilled,
  PhoneFilled,
  PictureFilled,
  PlaySquareFilled,
  PoundCircleFilled,
  PrinterFilled,
  ProfileFilled,
  ProjectFilled,
  PropertySafetyFilled,
  PushpinFilled,
  QqCircleFilled,
  QqSquareFilled,
  ReadFilled,
  ReconciliationFilled,
  RedEnvelopeFilled,
  RedditCircleFilled,
  RedditSquareFilled,
  RestFilled,
  RobotFilled,
  RocketFilled,
  SafetyCertificateFilled,
  SaveFilled,
  ScheduleFilled,
  SecurityScanFilled,
  SettingFilled,
  ShopFilled,
  ShoppingFilled,
  SignalFilled,
  SketchCircleFilled,
  SketchSquareFilled,
  SkinFilled,
  SlackCircleFilled,
  SmileFilled,
  SoundFilled,
  StarFilled,
  SwitcherFilled,
  TabletFilled,
  TagFilled,
  TagsFilled,
  TaobaoSquareFilled,
  ThunderboltFilled,
  ToolFilled,
  TrademarkCircleFilled,
  TrophyFilled,
  TwitterCircleFilled,
  TwitterSquareFilled,
  UnlockFilled,
  UsbFilled,
  VideoCameraFilled,
  WalletFilled,
  ZhihuCircleFilled,
  ZhihuSquareFilled,
  UpCircleTwoTone,
  DownCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  UpSquareTwoTone,
  DownSquareTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
  QuestionCircleTwoTone,
  PlusCircleTwoTone,
  PauseCircleTwoTone,
  MinusCircleTwoTone,
  PlusSquareTwoTone,
  MinusSquareTwoTone,
  InfoCircleTwoTone,
  ExclamationCircleTwoTone,
  CloseCircleTwoTone,
  CloseSquareTwoTone,
  CheckCircleTwoTone,
  CheckSquareTwoTone,
  ClockCircleTwoTone,
  WarningTwoTone,
  StopTwoTone,
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  SnippetsTwoTone,
  DiffTwoTone,
  HighlightTwoTone,
  PieChartTwoTone,
  BoxPlotTwoTone,
  FundTwoTone,
  SlidersTwoTone,
  Html5TwoTone,
  AccountBookTwoTone,
  AlertTwoTone,
  ApiTwoTone,
  AppstoreTwoTone,
  AudioTwoTone,
  BankTwoTone,
  BellTwoTone,
  BookTwoTone,
  BugTwoTone,
  BuildTwoTone,
  BulbTwoTone,
  CalculatorTwoTone,
  CalendarTwoTone,
  CameraTwoTone,
  CarTwoTone,
  CarryOutTwoTone,
  CiCircleTwoTone,
  CiTwoTone,
  CloudTwoTone,
  CreditCardTwoTone,
  CrownTwoTone,
  CustomerServiceTwoTone,
  DashboardTwoTone,
  DatabaseTwoTone,
  CodeTwoTone,
  CompassTwoTone,
  ContactsTwoTone,
  ContainerTwoTone,
  ControlTwoTone,
  DislikeTwoTone,
  DollarCircleTwoTone,
  DollarTwoTone,
  EnvironmentTwoTone,
  EuroCircleTwoTone,
  EuroTwoTone,
  ExperimentTwoTone,
  EyeTwoTone,
  EyeInvisibleTwoTone,
  FileAddTwoTone,
  FileExcelTwoTone,
  FileExclamationTwoTone,
  FileTwoTone,
  FileImageTwoTone,
  FileMarkdownTwoTone,
  FilePdfTwoTone,
  FilePptTwoTone,
  FileTextTwoTone,
  FileUnknownTwoTone,
  FileWordTwoTone,
  FileZipTwoTone,
  FilterTwoTone,
  FireTwoTone,
  FlagTwoTone,
  FolderAddTwoTone,
  FolderTwoTone,
  FolderOpenTwoTone,
  FrownTwoTone,
  FunnelPlotTwoTone,
  GiftTwoTone,
  GoldTwoTone,
  HddTwoTone,
  HeartTwoTone,
  HomeTwoTone,
  HourglassTwoTone,
  IdcardTwoTone,
  InsuranceTwoTone,
  InteractionTwoTone,
  LayoutTwoTone,
  LikeTwoTone,
  LockTwoTone,
  MailTwoTone,
  MedicineBoxTwoTone,
  MehTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  MoneyCollectTwoTone,
  NotificationTwoTone,
  PhoneTwoTone,
  PictureTwoTone,
  PlaySquareTwoTone,
  PoundCircleTwoTone,
  PrinterTwoTone,
  ProfileTwoTone,
  ProjectTwoTone,
  PropertySafetyTwoTone,
  PushpinTwoTone,
  ReconciliationTwoTone,
  RedEnvelopeTwoTone,
  RestTwoTone,
  RocketTwoTone,
  SafetyCertificateTwoTone,
  SaveTwoTone,
  ScheduleTwoTone,
  SecurityScanTwoTone,
  SettingTwoTone,
  ShopTwoTone,
  ShoppingTwoTone,
  SkinTwoTone,
  SmileTwoTone,
  SoundTwoTone,
  StarTwoTone,
  SwitcherTwoTone,
  TabletTwoTone,
  TagTwoTone,
  TagsTwoTone,
  ThunderboltTwoTone,
  ToolTwoTone,
  TrademarkCircleTwoTone,
  TrophyTwoTone,
  UnlockTwoTone,
  UsbTwoTone,
  VideoCameraTwoTone,
  WalletTwoTone,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";
import Button from "antd/es/button";
import Sider from "antd/es/layout/Sider";
import Col from "antd/es/grid/col";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import {
  Affix,
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumb,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Collapse,
  DatePicker,
  Descriptions,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Menu,
  Pagination,
  Rate,
  Row,
  Space,
  Steps,
  Table,
  Tooltip,
  Image,
  Empty,
  List,
  Popover,
  Statistic,
  Tabs,
  Tag,
  Timeline,
  Tree,
  Drawer,
  Modal,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  Spin,
  Select,
  Slider,
  Switch,
  TimePicker,
} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, { Group } from "antd/es/radio";
import SubMenu from "antd/es/menu/SubMenu";
import { Alert, Upload } from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import { useForm } from "antd/es/form/Form";

// Anchor, Mentions, Transfer, TreeSelect, Upload, QRCode, Message, ConfigProvider, FloatButton, Watermark, Notification, Segmented, Tour

export default () => (
  <Palette>
    <Category name="Button">
      <Component name="Button" docURL="https://ant.design/components/button/">
        <Variant>
          <Button>Default Button</Button>
        </Variant>
        <Variant name="primary">
          <Button type="primary">Primary Button</Button>
        </Variant>
        <Variant name="dashed">
          <Button type="dashed">Dashed Button</Button>
        </Variant>
        <Variant name="text">
          <Button type="text">Text Button</Button>
        </Variant>
        <Variant name="link">
          <Button type="link">Link Button</Button>
        </Variant>
        <Variant name="icon - circle">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Variant>
        <Variant name="ghost">
          <Button ghost>Ghost Default</Button>
        </Variant>
        <Variant name="ghost - primary">
          <Button type="primary" ghost>
            Ghost Primary
          </Button>
        </Variant>
        <Variant name="ghost - dashed">
          <Button type="dashed" ghost>
            Ghost Dashed
          </Button>
        </Variant>
        <Variant name="ghost - link">
          <Button type="link" ghost>
            Ghost Link
          </Button>
        </Variant>
        <Variant name="danger">
          <Button danger>Danger Default</Button>
        </Variant>
        <Variant name="danger - primary">
          <Button type="primary" danger>
            Danger Primary
          </Button>
        </Variant>
        <Variant name="danger - dashed">
          <Button type="dashed" danger>
            Danger Dashed
          </Button>
        </Variant>
        <Variant name="danger - text">
          <Button type="text" danger>
            Danger Text
          </Button>
        </Variant>
        <Variant name="danger - link">
          <Button type="link" danger>
            Danger Link
          </Button>
        </Variant>
        <Variant
          name="block"
          docURL="https://ant.design/components/button/#components-button-demo-block"
        >
          <Button block>Block Default</Button>
        </Variant>
        <Variant name="block - primary">
          <Button type="primary" block>
            Block Primary
          </Button>
        </Variant>
        <Variant name="block - dashed">
          <Button type="dashed" block>
            Block Dashed
          </Button>
        </Variant>
        <Variant name="block - link">
          <Button type="link" block>
            Block Link
          </Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component
        name="Title"
        docURL="https://ant.design/components/typography/#components-typography-demo-title"
      >
        <Variant name="h1">
          <Title level={1}>h1. Ant Design</Title>
        </Variant>
        <Variant name="h2">
          <Title level={2}>h2. Ant Design</Title>
        </Variant>
        <Variant name="h3">
          <Title level={3}>h3. Ant Design</Title>
        </Variant>
        <Variant name="h4">
          <Title level={4}>h4. Ant Design</Title>
        </Variant>
        <Variant name="h5">
          <Title level={5}>h5. Ant Design</Title>
        </Variant>
      </Component>
      <Component
        name="Text"
        docURL="https://ant.design/components/typography/#components-typography-demo-text"
      >
        <Variant>
          <Text>Ant Design (default)</Text>
        </Variant>
        <Variant name="secondary">
          <Text type="secondary">Ant Design (secondary)</Text>
        </Variant>
        <Variant name="success">
          <Text type="success">Ant Design (success)</Text>
        </Variant>
        <Variant name="warning">
          <Text type="warning">Ant Design (warning)</Text>
        </Variant>
        <Variant name="danger">
          <Text type="danger">Ant Design (danger)</Text>
        </Variant>
        <Variant name="disabled">
          <Text disabled>Ant Design (disabled)</Text>
        </Variant>
        <Variant name="mark">
          <Text mark>Ant Design (mark)</Text>
        </Variant>
        <Variant name="code">
          <Text code>Ant Design (code)</Text>
        </Variant>
        <Variant name="keyboard">
          <Text keyboard>Ant Design (keyboard)</Text>
        </Variant>
        <Variant name="underline">
          <Text underline>Ant Design (underline)</Text>
        </Variant>
        <Variant name="delete">
          <Text delete>Ant Design (delete)</Text>
        </Variant>
        <Variant name="strong">
          <Text strong>Ant Design (strong)</Text>
        </Variant>
        <Variant name="italic">
          <Text italic>Ant Design (italic)</Text>
        </Variant>
      </Component>
      <Component
        name="Link"
        docURL="https://ant.design/components/typography/#components-typography-demo-text"
      >
        <Variant>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Grid" docURL="https://ant.design/components/grid/">
        <Variant name="two cols" previewLayout="stretch">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </Variant>
        <Variant name="three cols" previewLayout="stretch">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Variant>
        <Variant name="four cols" previewLayout="stretch">
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Divider" docURL="https://ant.design/components/divider/">
        <Variant>
          <Divider />
        </Variant>
        <Variant name="dashed">
          <Divider dashed />
        </Variant>
        <Variant name="with title">
          <Divider>Title</Divider>
        </Variant>
        <Variant name="vertical">
          <Divider type="vertical" />
        </Variant>
      </Component>
      <Component name="Space" docURL="https://ant.design/components/space/">
        <Variant>
          <Space></Space>
        </Variant>
        <Variant name="vertical">
          <Space direction="vertical"></Space>
        </Variant>
      </Component>
      <Component
        name="App Layout"
        docURL="https://ant.design/components/layout/"
      >
        <Variant>
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Layout>
              <Sider>
                <span style={{ color: "#FFF" }}>Sider</span>
              </Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Layout>
              <Content>Content</Content>
              <Sider>
                <span style={{ color: "#FFF" }}>Sider</span>
              </Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider>
              <span style={{ color: "#FFF" }}>Sider</span>
            </Sider>
            <Layout>
              <Header color={"white"}>
                <span style={{ color: "#FFF" }}>Header</span>
              </Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Form">
      <Component name="Form" docURL="https://ant.design/components/form/">
        <Variant proto={FormProto} />
      </Component>
      <Component
        name="Form.Item"
        docURL="https://ant.design/components/form/#components-form-demo-dynamic-form-item"
      >
        <Variant name="Input">
          <Form.Item label="Input" name="input">
            <Input />
          </Form.Item>
        </Variant>
        <Variant name="Checkbox">
          <Form.Item label="Checkbox" name="checkbox" valuePropName="checked">
            <Checkbox>checkbox</Checkbox>
          </Form.Item>
        </Variant>
        <Variant name="Radio">
          <Form.Item label="Radio" name="radio">
            <Radio.Group>
              <Radio value="first"> First </Radio>
              <Radio value="second"> Second </Radio>
            </Radio.Group>
          </Form.Item>
        </Variant>
        <Variant name="Select">
          <Form.Item label="Select">
            <Select>
              <Select.Option value="opt1">Option 1</Select.Option>
              <Select.Option value="opt2">Option 2</Select.Option>
            </Select>
          </Form.Item>
        </Variant>
        <Variant name="Cascader">
          <Form.Item label="Cascader" name="cascader">
            <Cascader
              options={[
                {
                  value: "item",
                  label: "Item",
                  children: [
                    {
                      value: "subitem",
                      label: "Sub Item",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
        </Variant>
        <Variant name="DatePicker">
          <Form.Item label="DatePicker" name="datepicker">
            <DatePicker />
          </Form.Item>
        </Variant>
        <Variant name="InputNumber">
          <Form.Item label="InputNumber" name="inputnumber">
            <InputNumber />
          </Form.Item>
        </Variant>
        <Variant name="TextArea">
          <Form.Item label="TextArea" name="textarea">
            <TextArea rows={4} />
          </Form.Item>
        </Variant>
        <Variant name="Switch">
          <Form.Item label="Switch" name="switch" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Variant>
        <Variant name="Upload">
          <Form.Item label="Upload" name="upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Variant>
        <Variant name="Button">
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Entry">
      <Component
        name="AutoComplete"
        docURL="https://ant.design/components/auto-complete/"
      >
        <Variant>
          <AutoComplete />
        </Variant>
      </Component>
      <Component
        name="Cascader"
        docURL="https://ant.design/components/cascader/"
      >
        <Variant>
          <Cascader />
        </Variant>
      </Component>
      <Component
        name="Checkbox"
        docURL="https://ant.design/components/checkbox/"
      >
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component
        name="DatePicker"
        docURL="https://ant.design/components/date-picker/"
      >
        <Variant>
          <DatePicker />
        </Variant>
        <Variant name="show time">
          <DatePicker showTime={true} />
        </Variant>
        <Variant name="week">
          <DatePicker picker="week" />
        </Variant>
        <Variant name="month">
          <DatePicker picker="month" />
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter" />
        </Variant>
        <Variant name="year">
          <DatePicker picker="year" />
        </Variant>
        {/*
        <Variant name="range">
          <DatePicker.RangePicker/>
        </Variant>
        */}
      </Component>
      <Component name="Input" docURL="https://ant.design/components/input/">
        <Variant>
          <Input />
        </Variant>
        <Variant name="large">
          <Input size="large" />
        </Variant>
        <Variant name="small">
          <Input size="small" />
        </Variant>
        <Variant name="with prefix">
          <Input addonBefore="http://" defaultValue="mysite" />
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite" />
        </Variant>
      </Component>
      <Component
        name="InputNumber"
        docURL="https://ant.design/components/input-number/"
      >
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5} />
        </Variant>
      </Component>
      <Component name="Radio" docURL="https://ant.design/components/radio/">
        <Variant>
          <Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Group>
        </Variant>
      </Component>
      <Component name="Rate" docURL="https://ant.design/components/rate/">
        <Variant>
          <Rate />
        </Variant>
      </Component>
      <Component name="Select" docURL="https://ant.design/components/select/">
        <Variant>
          <Select defaultValue="lucy">
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
      </Component>
      <Component name="Slider" docURL="https://ant.design/components/slider/">
        <Variant previewLayout="stretch">
          <Slider defaultValue={30} />
        </Variant>
      </Component>
      <Component name="Switch" docURL="https://ant.design/components/switch/">
        <Variant>
          <Switch defaultChecked={false} />
        </Variant>
      </Component>
      <Component
        name="TimePicker"
        docURL="https://ant.design/components/time-picker/"
      >
        <Variant>
          <TimePicker />
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar" docURL="https://ant.design/components/avatar/">
        <Variant name="letters">
          <Avatar>User</Avatar>
        </Variant>
        <Variant name="letters - square shape">
          <Avatar shape="square">User</Avatar>
        </Variant>
        <Variant name="letters - with gap">
          <Avatar gap={4}>User</Avatar>
        </Variant>
        <Variant name="circle icon">
          <Avatar icon={<UserOutlined />} />
        </Variant>
        <Variant name="square icon">
          <Avatar shape="square" icon={<UserOutlined />} />
        </Variant>
        <Variant name="image type">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Variant>
        <Variant name="complex source">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: 32 }}
              />
            }
          />
        </Variant>
        <Variant name="with count badge">
          <Badge count={1}>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="with dot badge">
          <Badge dot>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="responsive size">
          <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
            User
          </Avatar>
        </Variant>
      </Component>
      <Component
        name="Avatar.Group"
        docURL="https://ant.design/components/avatar/#components-avatar-demo-group"
      >
        <Variant>
          <Avatar.Group>
            <Avatar icon={<UserOutlined />}>U1</Avatar>
            <Avatar icon={<UserOutlined />}>U2</Avatar>
            <Avatar icon={<UserOutlined />}>U3</Avatar>
          </Avatar.Group>
        </Variant>
        <Variant name="display max count">
          <Avatar.Group maxCount={2}>
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
          </Avatar.Group>
        </Variant>
      </Component>
      <Component name="Badge" docURL="https://ant.design/components/badge/">
        <Variant name="success status">
          <Badge status="success" />
        </Variant>
        <Variant name="success status with text">
          <Badge status="success" text="Success" />
        </Variant>
        <Variant name="count">
          <Badge count={25} />
        </Variant>
        <Variant name="overflow count">
          <Badge count={100} overflowCount={99} />
        </Variant>
        <Variant name="icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />} />
        </Variant>
        <Variant name="orange color with text">
          <Badge color="orange" text="orange" />
        </Variant>
        <Variant name="on avatar - count">
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - clickable">
          <a href="#">
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
          </a>
        </Variant>
        <Variant name="on avatar - show zero">
          <Badge count={0} showZero>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - overflow">
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - offset">
          <Badge count={5} offset={[10, 10]}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - small sized count">
          <Badge size="small" count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on icon - dot">
          <Badge dot>
            <NotificationOutlined style={{ fontSize: 16 }} />
          </Badge>
        </Variant>
        <Variant name="on link - dot">
          <Badge dot>
            <a href="#">Link something</a>
          </Badge>
        </Variant>
      </Component>
      <Component
        name="Badge.Ribbon"
        docURL="https://ant.design/components/badge/#components-badge-demo-ribbbon"
      >
        <Variant name="on card">
          <Badge.Ribbon text="Hippies">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Variant>
      </Component>
      <Component
        name="Calendar"
        docURL="https://ant.design/components/calendar/"
      >
        <Variant>
          <Calendar />
        </Variant>
      </Component>
      <Component name="Card" docURL="https://ant.design/components/card/">
        <Variant name="title and content">
          <Card title="Card title">Card content</Card>
        </Variant>
        <Variant name="extra link">
          <Card title="Card title" extra={<a href="#">More</a>}>
            Card content
          </Card>
        </Variant>
        <Variant name="borderless">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Variant>
        <Variant name="meta content">
          <Card title="Card title">
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Variant>
        <Variant name="3 in grid">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
          </Row>
        </Variant>
        <Variant name="built-in loading">
          <Card title="Card title" loading={true}>
            Card content
          </Card>
        </Variant>
        <Variant name="skeleton loading">
          <Card title="Card title">
            <Skeleton loading={true} avatar active>
              Card content
            </Skeleton>
          </Card>
        </Variant>
        <Variant name="with actions">
          <Card
            title="Card title"
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            Card content
          </Card>
        </Variant>
        <Variant name="with inner cards">
          <Card title="Card title">
            <Card type="inner" title="Inner Card title">
              Inner Card content
            </Card>
            <Card
              type="inner"
              title="Inner Card title"
              style={{ marginTop: 16 }}
            >
              Inner Card content
            </Card>
          </Card>
        </Variant>
      </Component>
      <Component
        name="Card.Grid"
        docURL="https://ant.design/components/card/#components-card-demo-grid-card"
      >
        <Variant>
          <Card title="Card title">
            <Card.Grid>Content</Card.Grid>
            <Card.Grid>Content</Card.Grid>
          </Card>
        </Variant>
      </Component>
      <Component
        name="Carousel"
        docURL="https://ant.design/components/carousel/"
      >
        <Variant previewLayout="stretch">
          <Carousel>
            <div>
              <h3
                style={{
                  margin: 0,
                  height: "160px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                  background: "#364d79",
                }}
              >
                1
              </h3>
            </div>
            <div>
              <h3
                style={{
                  margin: 0,
                  height: "160px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                  background: "#364d79",
                }}
              >
                2
              </h3>
            </div>
          </Carousel>
        </Variant>
      </Component>
      <Component
        name="Collapse"
        docURL="https://ant.design/components/collapse/"
      >
        <Variant>
          <Collapse>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="default active panel">
          <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="accordion mode">
          <Collapse accordion>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="borderless">
          <Collapse bordered={false}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="custom expand icon">
          <Collapse
            accordion
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="no arrow">
          <Collapse>
            <Collapse.Panel
              header="This is panel header 1"
              key="1"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 2"
              key="2"
              showArrow={false}
            >
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 3"
              key="3"
              showArrow={false}
            >
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="expand icon - position right">
          <Collapse expandIconPosition="right">
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="ghost">
          <Collapse ghost>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
      </Component>
      <Component
        name="Descriptions"
        docURL="https://ant.design/components/descriptions/"
      >
        <Variant>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="bordered">
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="small size">
          <Descriptions title="User Info" size="small">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="responsive size">
          <Descriptions
            title="User Info"
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
      </Component>
      <Component name="Empty" docURL="https://ant.design/components/empty/">
        <Variant name="basic">
          <Empty />
        </Variant>
        <Variant name="antd image">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Variant>
        <Variant name="image source">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
          />
        </Variant>
        <Variant name="with description">
          <Empty description={<span>Description</span>} />
        </Variant>
        <Variant name="no description">
          <Empty description={false} />
        </Variant>
        <Variant name="with extra content">
          <Empty>
            <Button type="primary">Create Now</Button>
          </Empty>
        </Variant>
      </Component>
      <Component name="Image" docURL="https://ant.design/components/image/">
        <Variant name="basic">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Variant>
        <Variant name="custom preview">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            preview={{
              src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            }}
          />
        </Variant>
        <Variant name="fault tolerant">
          <Image
            width={200}
            height={200}
            src="error"
            fallback="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          />
        </Variant>
      </Component>
      <Component
        name="Image.PreviewGroup"
        docURL="https://ant.design/components/image/#components-image-demo-preview-group"
      >
        <Variant>
          <Image.PreviewGroup>
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
          </Image.PreviewGroup>
        </Variant>
      </Component>
      <Component name="List" docURL="https://ant.design/components/list/">
        <Variant name="basic">
          <List
            dataSource={["Foo", "Bar"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="with footer and header">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={["Foo", "Bar"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="items with meta and extra img">
          <List
            itemLayout="vertical"
            dataSource={[
              {
                title: "Foo",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
              },
              {
                title: "Bar",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
              },
            ]}
            renderItem={(item) => (
              <List.Item
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="grid layout">
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" },
            ]}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="responsive grid layout">
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" },
            ]}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
      </Component>
      <Component name="Popover" docURL="https://ant.design/components/popover/">
        <Variant name="basic">
          <Popover content="Content" title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by focus">
          <Popover content="Content" title="Title" trigger="focus">
            <Button>Focus me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by click">
          <Popover content="Content" title="Title" trigger="click">
            <Button>Click me</Button>
          </Popover>
        </Variant>
        <Variant name="arrow pointer at center">
          <Popover
            placement="topLeft"
            title="Title"
            content="Content"
            arrowPointAtCenter
          >
            <Button>Arrow points to center</Button>
          </Popover>
        </Variant>
        <Variant name="placement - right top">
          <Popover
            placement="rightTop"
            title="Title"
            content="Content"
            trigger="click"
          >
            <Button>RT</Button>
          </Popover>
        </Variant>
      </Component>
      <Component
        name="Statistic"
        docURL="https://ant.design/components/statistic/"
      >
        <Variant name="basic">
          <Statistic title="Active Users" value={112893} />
        </Variant>
        <Variant name="loading">
          <Statistic title="Active Users" value={112893} loading />
        </Variant>
        <Variant name="with precision">
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
        </Variant>
        <Variant name="prefix icon">
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Variant>
        <Variant name="suffix text">
          <Statistic title="Unmerged" value={93} suffix=" / 100" />
        </Variant>
        <Variant name="in card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="Active" value={11.28} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Idle" value={9.3} />
              </Card>
            </Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Table" docURL="https://ant.design/components/table/">
        <Variant name="basic">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="jsx style">
          <Table
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Age" dataIndex="age" key="age" />
          </Table>
        </Variant>
        <Variant name="checkbox selection">
          <Table
            rowSelection={{ type: "checkbox" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="radio selection">
          <Table
            rowSelection={{ type: "radio" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="groups selection">
          <Table
            rowSelection={{
              type: "checkbox",
              selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE,
              ],
            }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="filter and sorter">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                filters: [
                  {
                    text: "John",
                    value: "John",
                  },
                  {
                    text: "Lucy",
                    value: "Lucy",
                  },
                ],
                onFilter: (value: any, record) =>
                  record.name.indexOf(value) === 0,
              },
              {
                title: "Age",
                dataIndex: "age",
                sorter: (a, b) => a.age - b.age,
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="middle size">
          <Table
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="title and footer">
          <Table
            title={() => "Header"}
            footer={() => "Footer"}
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="expandable rows">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                age: 30,
                description: "My name is John Brown, I am 32 years old",
              },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            expandable={{
              expandedRowRender: (record: any) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== "Lucy",
            }}
          />
        </Variant>
        <Variant name="row span">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, row, index) => {
                  if (index === 0) {
                    return {
                      children: value,
                      props: { rowSpan: 2 },
                    };
                  }
                  if (index === 1) {
                    return {
                      children: value,
                      props: { rowSpan: 0 },
                    };
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" },
            ]}
          />
        </Variant>
        <Variant name="col span">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 3 } };
                  }
                  return value;
                },
              },
              {
                title: "Age",
                dataIndex: "age",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                },
              },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" },
            ]}
          />
        </Variant>
        <Variant
          name="tree data"
          docURL="https://ant.design/components/table/#components-table-demo-tree-data"
        >
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
                width: "12%",
              },
              {
                title: "Address",
                dataIndex: "address",
                width: "30%",
                key: "address",
              },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John Brown sr.",
                age: 60,
                address: "New York No. 1 Lake Park",
                children: [
                  {
                    key: 11,
                    name: "John Brown",
                    age: 42,
                    address: "New York No. 2 Lake Park",
                  },
                  {
                    key: 12,
                    name: "John Brown jr.",
                    age: 30,
                    address: "New York No. 3 Lake Park",
                    children: [
                      {
                        key: 121,
                        name: "Jimmy Brown",
                        age: 16,
                        address: "New York No. 3 Lake Park",
                      },
                    ],
                  },
                  {
                    key: 13,
                    name: "Jim Green sr.",
                    age: 72,
                    address: "London No. 1 Lake Park",
                    children: [
                      {
                        key: 131,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park",
                        children: [
                          {
                            key: 1311,
                            name: "Jim Green jr.",
                            age: 25,
                            address: "London No. 3 Lake Park",
                          },
                          {
                            key: 1312,
                            name: "Jimmy Green sr.",
                            age: 18,
                            address: "London No. 4 Lake Park",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                key: 2,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
              },
            ]}
          />
        </Variant>
        <Variant
          name="fixed header"
          docURL="https://ant.design/components/table/#components-table-demo-fixed-header"
        >
          <Table
            dataSource={Array.from(Array(30).keys()).map((value, index) => ({
              key: index,
              name: `Edward King ${index}`,
              age: 32,
              address: `London, Park Lane no. ${index}`,
            }))}
            scroll={{ y: 240 }}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                width: 150,
              },
              {
                title: "Age",
                dataIndex: "age",
                width: 150,
              },
              {
                title: "Address",
                dataIndex: "address",
              },
            ]}
          />
        </Variant>
        <Variant name="ellipsis">
          <Table
            columns={[
              { title: "Name", dataIndex: "name", ellipsis: true },
              { title: "address", dataIndex: "address", ellipsis: true },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                address: "Long Column Long Column Long Column",
              },
              {
                key: 2,
                name: "Lucy",
                address: "Long Column Long Column Long Column",
              },
            ]}
          />
        </Variant>
        <Variant
          name="summary"
          docURL="https://ant.design/components/table/#components-table-demo-summary"
        >
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    This is a summary content
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Variant>
        <Variant name="responsive">
          <Table
            columns={[
              {
                title: "Name (all screens)",
                dataIndex: "name",
                key: "name",
                render: (text) => <a>{text}</a>,
              },
              {
                title: "Age (medium screen or bigger)",
                dataIndex: "age",
                key: "age",
                responsive: ["md"],
              },
              {
                title: "Address (large screen or bigger)",
                dataIndex: "address",
                key: "address",
                responsive: ["lg"],
              },
            ]}
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
              },
            ]}
          />
        </Variant>
        <Variant name="pagination none">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            pagination={false}
          />
        </Variant>
        <Variant name="pagination top right">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            pagination={{ position: ["topRight", "none" as any] }}
          />
        </Variant>
      </Component>
      <Component name="Tabs" docURL="https://ant.design/components/tabs/">
        <Variant name="basic">
          <Tabs>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="default active key">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="centred">
          <Tabs centered>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with icon">
          <Tabs>
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="tab position left">
          <Tabs tabPosition="left">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with extra actions on both sides">
          <Tabs
            tabBarExtraContent={{
              left: (
                <Button style={{ marginRight: "16px" }}>
                  Left Extra Action
                </Button>
              ),
              right: (
                <Button style={{ marginLeft: "16px" }}>
                  Right Extra Action
                </Button>
              ),
            }}
          >
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type card">
          <Tabs type="card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type editable-card">
          <Tabs type="editable-card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
      </Component>
      <Component name="Tag" docURL="https://ant.design/components/tag/">
        <Variant name="basic">
          <Tag>Tag</Tag>
        </Variant>
        <Variant name="closable">
          <Tag closable>Tag</Tag>
        </Variant>
        <Variant name="green color">
          <Tag color="green">green</Tag>
        </Variant>
        <Variant name="custom color">
          <Tag color="#f50">#f50</Tag>
        </Variant>
        <Variant name="with icon">
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
        </Variant>
      </Component>
      <Component
        name="Timeline"
        docURL="https://ant.design/components/timeline/"
      >
        <Variant name="basic">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item>Step 2</Timeline.Item>
            <Timeline.Item>Step 3</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="colored">
          <Timeline>
            <Timeline.Item color="green">Step 1</Timeline.Item>
            <Timeline.Item color="red">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode left" previewLayout="stretch">
          <Timeline mode="left">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode right" previewLayout="stretch">
          <Timeline mode="right">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode alternate" previewLayout="stretch">
          <Timeline mode="alternate">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="with icon">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              color="red"
            >
              Step 2
            </Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
      <Component name="Tooltip" docURL="https://ant.design/components/tooltip/">
        <Variant name="basic">
          <Tooltip title="Prompt text">
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </Variant>
        <Variant name="arrow point at center">
          <Tooltip arrowPointAtCenter title="Prompt Text">
            <Button>Arrow points to center</Button>
          </Tooltip>
        </Variant>
        <Variant name="placement - right top">
          <Tooltip placement="rightTop" title="Prompt Text">
            <Button>RT</Button>
          </Tooltip>
        </Variant>
        <Variant name="orange color">
          <Tooltip title="Prompt text" color="orange">
            <Button>Orange</Button>
          </Tooltip>
        </Variant>
        <Variant name="custom color">
          <Tooltip title="Prompt text" color="#2db7f5">
            <Button>#2db7f5</Button>
          </Tooltip>
        </Variant>
      </Component>
      <Component name="Tree" docURL="https://ant.design/components/tree/">
        <Variant name="basic">
          <Tree
            checkable
            defaultExpandedKeys={["0-0-0", "0-0-1"]}
            defaultSelectedKeys={["0-0-0", "0-0-1"]}
            defaultCheckedKeys={["0-0-0", "0-0-1"]}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "parent 1-0",
                    key: "0-0-0",
                    disabled: true,
                    children: [
                      {
                        title: "leaf",
                        key: "0-0-0-0",
                        disableCheckbox: true,
                      },
                      {
                        title: "leaf",
                        key: "0-0-0-1",
                      },
                    ],
                  },
                  {
                    title: "parent 1-1",
                    key: "0-0-1",
                    children: [
                      {
                        title: <span style={{ color: "#1890ff" }}>sss</span>,
                        key: "0-0-1-0",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="directory tree">
          <Tree.DirectoryTree
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
                ],
              },
              {
                title: "parent 1",
                key: "0-1",
                children: [
                  { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
                  { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="show line">
          <Tree
            showLine
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  {
                    title: "leaf 0-0",
                    key: "0-0-0",
                    children: [
                      { title: "leaf 0-0-1", key: "0-0-0-1", isLeaf: true },
                    ],
                  },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="custom icons">
          <Tree
            showIcon
            defaultExpandAll
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                icon: <SmileOutlined />,
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                    icon: <MehOutlined />,
                  },
                  {
                    title: "leaf",
                    key: "0-0-1",
                    icon: ({ selected }) =>
                      selected ? <FrownFilled /> : <FrownOutlined />,
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="custom collapse/expand icon">
          <Tree
            switcherIcon={<DownOutlined />}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                  },
                ],
              },
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Affix" docURL="https://ant.design/components/affix/">
        <Variant name="top">
          <Affix offsetTop={10}>
            <Button type="primary">Affix top</Button>
          </Affix>
        </Variant>
        <Variant name="bottom">
          <Affix offsetBottom={10}>
            <Button type="primary">Affix bottom</Button>
          </Affix>
        </Variant>
      </Component>
      <Component
        name="Breadcrumb"
        docURL="https://ant.design/components/breadcrumb/"
      >
        <Variant name="basic">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with icons">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for all">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for each">
          <Breadcrumb separator="">
            <Breadcrumb.Item>Location</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with drop down menu">
          <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              overlay={
                <Menu>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      General
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      Layout
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
      </Component>
      <Component
        name="Dropdown"
        docURL="https://ant.design/components/dropdown/"
      >
        <Variant name="basic">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomCenter"
          >
            <a onClick={(e) => e.preventDefault()}>
              Hover me <DownOutlined />
            </a>
          </Dropdown>
        </Variant>
        <Variant name="display arrow">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="topCenter"
            arrow
          >
            <Button>topCenter</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on click">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button>Click me</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on context menu">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
              </Menu>
            }
            trigger={["contextMenu"]}
          >
            <div>Right Click on here</div>
          </Dropdown>
        </Variant>
      </Component>
      <Component name="Menu" docURL="https://ant.design/components/menu/">
        <Variant name="vertical">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
        <Variant name="horizontal">
          <Menu defaultSelectedKeys={["1"]} mode={"horizontal"}>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
      </Component>
      <Component
        name="Pagination"
        docURL="https://ant.design/components/pagination/"
      >
        <Variant name="basic">
          <Pagination defaultCurrent={1} total={50} />
        </Variant>
        <Variant name="with jumper">
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </Variant>
        <Variant name="mini size">
          <Pagination size="small" total={50} />
        </Variant>
        <Variant name="simple mode">
          <Pagination simple defaultCurrent={2} total={50} />
        </Variant>
        <Variant name="total number">
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </Variant>
        <Variant name="custom prev/next">
          <Pagination
            total={500}
            itemRender={(current, type, originalElement) => {
              if (type === "prev") {
                return <a>Previous</a>;
              }
              if (type === "next") {
                return <a>Next</a>;
              }
              return originalElement;
            }}
          />
        </Variant>
      </Component>
      <Component name="Steps" docURL="https://ant.design/components/steps/">
        <Variant name="basic">
          <Steps current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="mini">
          <Steps size="small" current={1}>
            <Steps.Step title="Finished" />
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>
        </Variant>
        <Variant name="with icon">
          <Steps>
            <Steps.Step status="finish" title="Login" icon={<UserOutlined />} />
            <Steps.Step
              status="finish"
              title="Verification"
              icon={<SolutionOutlined />}
            />
            <Steps.Step
              status="process"
              title="Pay"
              icon={<LoadingOutlined />}
            />
            <Steps.Step status="wait" title="Done" icon={<SmileOutlined />} />
          </Steps>
        </Variant>
        <Variant name="vertical">
          <Steps direction="vertical" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="vertical mini">
          <Steps direction="vertical" size="small" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="error status">
          <Steps current={1} status="error">
            <Steps.Step title="Finished" description="This is a description" />
            <Steps.Step
              title="In Process"
              description="This is a description"
            />
            <Steps.Step title="Waiting" description="This is a description" />
          </Steps>
        </Variant>
        <Variant name="dot style">
          <Steps progressDot current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="custom dot style">
          <Steps
            current={1}
            progressDot={(dot, { status, index }) => (
              <Popover
                content={
                  <span>
                    step {index} status: {status}
                  </span>
                }
              >
                {dot}
              </Popover>
            )}
          >
            <Steps.Step
              title="Finished"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="In Progress"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
          </Steps>
        </Variant>
        <Variant name="with percent">
          <Steps current={1} percent={60}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert" docURL="https://ant.design/components/alert/">
        <Variant name="error">
          <Alert message="Error Text" type="error" />
        </Variant>
        <Variant name="warning">
          <Alert message="Warning Text" type="warning" />
        </Variant>
        <Variant name="info">
          <Alert message="Info Text" type="info" />
        </Variant>
        <Variant name="success">
          <Alert message="Success Text" type="success" />
        </Variant>
        <Variant name="closable">
          <Alert message="Warning Text" type="warning" closable />
        </Variant>
        <Variant name="with description">
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        </Variant>
        <Variant name="success type with icon">
          <Alert message="Success Tips" type="success" showIcon />
        </Variant>
        <Variant name="error type with icon and description">
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </Variant>
        <Variant name="as a banner">
          <Alert message="Warning text" banner />
        </Variant>
        <Variant name="with custom action">
          <Alert
            message="Error Text"
            showIcon
            description="Error Description Error Description Error Description Error Description"
            type="error"
            action={
              <Button size="small" danger>
                Detail
              </Button>
            }
          />
        </Variant>
        <Variant name="custom close text">
          <Alert message="Info Text" type="info" closeText="Close Now" />
        </Variant>
      </Component>
      <Component name="Drawer" docURL="https://ant.design/components/drawer/">
        <Variant name="placement right">
          <Drawer title="Basic Drawer" open>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement top">
          <Drawer title="Basic Drawer" open placement="top">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement left">
          <Drawer title="Basic Drawer" open placement="left">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement bottom">
          <Drawer title="Basic Drawer" open placement="bottom">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="large">
          <Drawer title="Basic Drawer" open size="large">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Modal" docURL="https://ant.design/components/modal/">
        <Variant name="basic">
          <Modal title="Basic Modal" open>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom footer">
          <Modal
            title="Basic Modal"
            open
            footer={[
              <Button key="back">Return</Button>,
              <Button key="submit" type="primary">
                Submit
              </Button>,
              <Button key="link" href="https://google.com" type="primary">
                Search on Google
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="width">
          <Modal title="Basic Modal" open width={1000}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="ok and cancel text">
          <Modal
            title="Basic Modal"
            open
            okText="Confirm"
            cancelText="Cancel"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="vertically centred">
          <Modal title="Vertically centered modal dialog" centered open>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="top offset">
          <Modal title="20px to Top" style={{ top: 20 }} open>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom button props">
          <Modal
            title="Basic Modal"
            open
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
      </Component>
      <Component
        name="Popconfirm"
        docURL="https://ant.design/components/popconfirm/"
      >
        <Variant name="basic">
          <Popconfirm title="Are you sure to delete this entity?">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="locale text">
          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="placement - bottom right">
          <Popconfirm
            placement="bottomRight"
            title="Are you sure to delete this task?"
          >
            <Button>BR</Button>
          </Popconfirm>
        </Variant>
        <Variant name="custom icon">
          <Popconfirm
            title="Are you sure？"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component
        name="Progress"
        docURL="https://ant.design/components/progress/"
      >
        <Variant name="standard">
          <Progress percent={30} />
        </Variant>
        <Variant name="status exception">
          <Progress percent={70} status="exception" />
        </Variant>
        <Variant name="completed">
          <Progress percent={100} />
        </Variant>
        <Variant name="hide info">
          <Progress percent={50} showInfo={false} />
        </Variant>
        <Variant name="small">
          <Progress percent={30} size="small" />
        </Variant>
        <Variant name="with success segment">
          <Progress percent={60} success={{ percent: 30 }} />
        </Variant>
        <Variant name="with gradient">
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            percent={99.9}
          />
        </Variant>
        <Variant name="square linecaps">
          <Progress strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="circular">
          <Progress type="circle" percent={75} />
        </Variant>
        <Variant name="circular - with gradient">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            percent={90}
          />
        </Variant>
        <Variant name="circular - with success segment">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Variant>
        <Variant name="circular - small">
          <Progress type="circle" percent={30} width={80} />
        </Variant>
        <Variant name="circular - custom text format">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </Variant>
        <Variant name="circular - square linecaps">
          <Progress type="circle" strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="dashboard">
          <Progress type="dashboard" percent={75} />
        </Variant>
        <Variant name="dashboard - gap degree">
          <Progress type="dashboard" percent={75} gapDegree={30} />
        </Variant>
        <Variant name="dashboard - square linecaps">
          <Progress strokeLinecap="square" type="dashboard" percent={75} />
        </Variant>
        <Variant name="steps">
          <Progress percent={50} steps={3} />
        </Variant>
        <Variant name="steps - small">
          <Progress
            percent={100}
            steps={5}
            size="small"
            strokeColor="#52c41a"
          />
        </Variant>
      </Component>
      <Component name="Result" docURL="https://ant.design/components/result/">
        <Variant name="success">
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        </Variant>
        <Variant name="info">
          <Result
            title="Your operation has been executed"
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="warning">
          <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="not authorized">
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="page doesn't exist">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="something went wrong on server">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="complex error feedback">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          >
            <div>
              <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
                  The content you submitted has the following error:
                </Text>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account
                has been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account is
                not yet eligible to apply. <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>
        </Variant>
        <Variant name="custom icon">
          <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={<Button type="primary">Next</Button>}
          />
        </Variant>
      </Component>
      <Component
        name="Skeleton"
        docURL="https://ant.design/components/skeleton/"
      >
        <Variant name="basic">
          <Skeleton />
        </Variant>
        <Variant name="with avatar and multiple paragraphs">
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </Variant>
        <Variant name="active animation">
          <Skeleton active />
        </Variant>
        <Variant name="contains sub component">
          <Skeleton loading={false}>
            <div>
              <h4>Ant Design, a design language</h4>
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            </div>
          </Skeleton>
        </Variant>
        <Variant name="avatar">
          <Skeleton.Avatar />
        </Variant>
        <Variant name="avatar - square shape">
          <Skeleton.Avatar shape="square" />
        </Variant>
        <Variant name="avatar - small size">
          <Skeleton.Avatar size="small" />
        </Variant>
        <Variant name="button">
          <Skeleton.Button />
        </Variant>
        <Variant name="button - circle shape">
          <Skeleton.Button shape="circle" />
        </Variant>
        <Variant name="button - round shape">
          <Skeleton.Button shape="round" />
        </Variant>
        <Variant name="button - block">
          <Skeleton.Button block />
        </Variant>
        <Variant name="button - large size">
          <Skeleton.Button size="large" />
        </Variant>
        <Variant name="input">
          <Skeleton.Input style={{ width: 200 }} />
        </Variant>
        <Variant name="input - large size">
          <Skeleton.Input style={{ width: 200 }} size="large" />
        </Variant>
        <Variant name="image">
          <Skeleton.Image />
        </Variant>
      </Component>
      <Component name="Spin" docURL="https://ant.design/components/spin/">
        <Variant name="basic">
          <Spin />
        </Variant>
        <Variant name="tip">
          <Spin tip="Loading..." />
        </Variant>
        <Variant name="custom spinning indicator">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </Variant>
        <Variant name="small size">
          <Spin size="small" />
        </Variant>
        <Variant name="large size">
          <Spin size="large" />
        </Variant>
      </Component>
    </Category>
    
  </Palette>
);

export function FormProto() {
  const [form] = useForm();

  const onFormFinish = (values: any) => {
    // todo handle form finish
  };

  const onFormFinishFailed = (errorInfo: any) => {
    // todo handle form finish fail
  };

  const onFormClearClick = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      initialValues={{ remember: true }}
      onFinish={onFormFinish}
      onFinishFailed={onFormFinishFailed}
    >
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onFormClearClick}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
}
