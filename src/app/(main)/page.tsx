import { Button } from "@/src/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/src/components/ui/card";
import { CardDemo } from "@/src/components/cards/CardDemoComponent";

export default function AboutPage() {
  return (
    <div>
      <p>សួស្តី!</p>
      <p>Hello, this is about page!</p>

      <Button>Button</Button>
      <Card>
        <CardHeader>This is the header</CardHeader>
      </Card>
      <CardDemo />
      <Card>
        <CardFooter>This is the footer</CardFooter>
      </Card>

    </div>
  );
}
