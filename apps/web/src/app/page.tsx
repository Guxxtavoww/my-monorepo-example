import { Button } from '@repo/ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';

export default function Home() {
  return (
    <main className="min-h-svh p-2 space-y-4">
      <h1>Welcome to the home page!</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>OI</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog da porra</DialogDescription>
          <DialogFooter>
            <DialogDescription>sdadsaassad</DialogDescription>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
