type PropsDashboardLayout = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: PropsDashboardLayout): React.ReactNode {
	return <div style={{ color: 'red' }}>{children}</div>;
}
