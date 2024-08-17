import { BookOpenCheck, CalendarArrowDown, Dot, HandCoins, House, Users, Kanban, SquareActivity, FileQuestion, BookText, ArrowUpNarrowWide, QrCode, Boxes, Receipt, Cog, BrainCircuit, } from 'lucide-react';

const Resources = () => {
    const sections = [
        {
            title: 'About Us',
            icon: House,
            items: [
                'Vision & Mission',
                'Organogram',
                'Officers/Staff',
                'Work Distribution'
            ]
        },
        {
            title: 'Notice/Order/Circular',
            icon: CalendarArrowDown,
            items: [
                'Notification/Circular',
                'Office orders/ Government',
                'Certificate (NOC)',
                'News Notifications'
            ]
        },
        {
            title: 'Policies & Publications',
            icon: BookOpenCheck,
            items: [
                'Policy',
                'Laws & Regulations/Guidelines & Strategies',
                'Publications & Annual Report'
            ]
        },
        {
            title: 'Citizen e-Services',
            icon: HandCoins,
            items: [
                'Donation in ICT Innovation',
                'Fellowship & Scholarship',
                'Hi-Teck Park One Stop Service',
                'Other e-Service'
            ]
        },
        {
            title: "Citizen's Charter",
            icon: Users,
            items: [
                "Citizen's Charter",
                'Focal Point/Monitoring',
                'Work Plan, Monitoring & Evaluation Report',
                'Laws/Regulations'
            ]
        },
        {
            title: "Annual Performance Management",
            icon: Kanban,
            items: [
                "Guidelines/Circulars/APA",
                'Annual Performance',
                'Monitoring and evaluation report',
                'APAMS software link'
            ]
        },
        {
            title: "National Integrity Strategy",
            icon: SquareActivity,
            items: [
                "Best Practice Work Plan Web Link",
                'Intregrity Strategy',
                'Committee & Focal point',
                'Laws/Regulations/Policies'
            ]
        },
        {
            title: "Grievance Redress System",
            icon: FileQuestion,
            items: [
                "GRS and Appellate Officers",
                'Grievance Submission',
                'Work Plan, Monitoring',
                'Evalution Report'
            ]
        },
        {
            title: "Right to Information",
            icon: BookText,
            items: [
                "Designated Officer & Appellate Authority",
                'Application and appeal forms',
                'Self Expressible',
                'Information/Progress Report'
            ]
        },
        {
            title: "Innovative Activities",
            icon: ArrowUpNarrowWide,
            items: [
                "Innovation Team",
                'Innovation Idea',
                'Innovation Work',
                'Plan/Publication',
                'Piloting Project',
            ]
        },
        {
            title: "Service Process Simplification",
            icon: QrCode,
            items: [
                "Notification/Circular/Policy",
                "Digital Service",
                "SPS Example",
                "List of simplified services"
            ]
        },
        {
            title: "SDG and Development Plan",
            icon: Boxes,
            items: [
                "Ministry/ Divisions’ SDG",
                "SDG Focal/ Alternative Focal Point",
                "SDG National Document",
                "5th Year Plan & Report"
            ]
        },
        {
            title: "Budget & Projects",
            icon: Receipt,
            items: [
                "Annual Procurement Plan",
                "Budget & MTBF Budget",
                "Budget Reports/ Office Orders",
                "Important Implemented Projects"
            ]
        },
        {
            title: "National ICT Policy 2018",
            icon: BrainCircuit,
            items: [
                "National ICT Policy 2018",
                "Ministry/Division Wise Work Plan",
                "Office Order/Notification",
                "Focal Point",
            ]
        },
        {
            title: "Miscellaneous",
            icon: Cog,
            items: [
                "Different Forms",
                "Best Practice",
                "ICT Related Award",
                "Different Committee",
            ]
        }
    ];
    return (
        <div>
            <div className="max-w-[1024px] mx-2 sm:mx-2 lg:mx-auto mt-3 p-3 bg-[#FFFFFF30] rounded-md text-white">
                <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Resources and Information || Key Information and Services</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3'>
                    {sections.map((section, index) => (
                        <div key={index} className='p-3 bg-[#FFFFFF30] rounded-md'>
                            <h1 className='text-center font-semibold text-sm sm:text-lg underline'>{section.title}</h1>
                            <div className='grid grid-cols-3 gap-5 mt-3'>
                                <section.icon strokeWidth={1.5} className='w-24 h-24 animate-colorChange col-span-1' />
                                <div className='col-span-2'>
                                    {section.items.map((item, idx) => (
                                        <div key={idx} className='flex items-center'>
                                            <Dot />
                                            <p className='text-xs'>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resources