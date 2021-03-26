import Schedule from '../../components/Schedule'

export default {
    title: 'Components/Schedule',
    components: Schedule,
    parameters: {
        layout: 'centered'
    }
}

const schedule = [
    { key: "1", day: "Segunda", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "2", day: "Terça", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "3", day: "Quarta", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "4", day: "Quinta", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "5", day: "Sexta", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "6", day: "Sabado", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "7", day: "Domingo", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { key: "8", day: "Feriados", hours: "08:00 - 12:00, 13:30 - 18:00" },
]

const Templates = args => <Schedule {...args} />

export const Default = Templates.bind({})
Default.args = {
    states: "open",
    schedule
}