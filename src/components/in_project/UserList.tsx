// import Breadcrumb from '../../../components/Breadcrumb'
// import CustomTable from '../../../components/customs/CustomTable'
// import { ACTION, TYPE_CONTENT } from '../../../utils/constants/enums'
// import { Header, Line } from '../../../utils/constants/types'

// type Props = {}

// export default function UserList({ }: Props) {

//     const headers: Header[] = [
//         {
//             title: 'Product Name',
//             width: 40
//         },
//         {
//             title: 'Invoice date',
//         },
//         {
//             title: 'Status',
//         }
//     ]

//     const lines: Line[] = [
//         [
//             [
//                 {
//                     content: 'Apple Watch Series 7',
//                     type: [TYPE_CONTENT.TEXT],
//                 },
//                 {
//                     content: '$269',
//                     type: [TYPE_CONTENT.BADGE],
//                     color: '#F00'
//                 },
//                 {
//                     content: '22',
//                     type: [TYPE_CONTENT.TEXT]
//                 },
//             ]
//         ]
//     ]

//     let actions_callbacks: Map<ACTION, Function> = new Map([
//         [ACTION.READ, () => { alert(ACTION.READ) }],
//         [ACTION.DELETE, () => { alert(ACTION.DELETE) }],
//         [ACTION.EDIT, () => { alert(ACTION.EDIT) }],
//     ]);

//     const TiltePage= 'Liste des utilisateurs';


//     return (
//         <>
//             <Breadcrumb pageName={TiltePage} />
//             <div className="flex flex-col gap-10">
//                 <CustomTable headers={headers} lines={lines} title={'Table'} actions={actions_callbacks} />
//             </div>
//         </>
//     )
// }