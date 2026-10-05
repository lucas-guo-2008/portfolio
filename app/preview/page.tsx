import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";

export default function PreviewPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Portfolio" summary="Build a personal website to display project work and track daily metrics (Gym, Running, Sleep). The secondary goal is to learn web development by shipping a functional, end-to-end system with minimal prior experience." path="projects / portfolio"></PageHeader>
            <PageHeader title="Portfolio"></PageHeader>
            <Card header="Tung tung">Tung tung tung sahur</Card>
            <Card>Tung tung tung sahur</Card>
            <div className="flex flex-wrap gap-4">
                <StatusBadge status='live'></StatusBadge>
                <StatusBadge status='building'></StatusBadge>
                <StatusBadge status='planned'></StatusBadge>
            </div>
        </div>
    );
}