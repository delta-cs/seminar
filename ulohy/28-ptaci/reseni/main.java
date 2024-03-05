import java.util.Scanner;

class Main {
    static final int NONE_ID = 0;
    static final int BIRD_ID = 1;
    static final int SPEAKER_ID = 2;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int d = scanner.nextInt() + 1;
        int[] wireItems = new int[d];

        int p = scanner.nextInt();
        for (int i = 0; i < p; i++) {
            wireItems[scanner.nextInt()] = BIRD_ID;
        }

        int s = scanner.nextInt();

        int[] speakerVolumes = new int[d];
        int[] speakerTones = new int[d];

        for (int i = 0; i < s; i++) {
            int position = scanner.nextInt();

            speakerVolumes[position] = scanner.nextInt();
            speakerTones[position] = scanner.nextInt();

            wireItems[position] = SPEAKER_ID;
        }

        int z = scanner.nextInt();
        for (int i = 0; i < z; i++) {
            int speakerPosition = scanner.nextInt();
            playSpeaker(wireItems, speakerPosition, speakerVolumes[speakerPosition], speakerTones[speakerPosition]);
        }

        printWireItems(wireItems);
    }

    static void playSpeaker(int[] wireItems, int position, int volume, int tone) {
        if (volume < 1 || tone < 1) {
            return;
        }

        int leftEdge = Math.max(0, position - volume);
        for (int i = leftEdge; i < position; i++) {
            if (wireItems[i] != BIRD_ID) {
                continue;
            }

            int newIndex = i - tone;
            if (newIndex >= 0 && wireItems[newIndex] == NONE_ID) {
                wireItems[newIndex] = wireItems[i];
            }

            wireItems[i] = NONE_ID;
        }

        int rightEdge = Math.min(wireItems.length - 1, position + volume);
        for (int i = rightEdge; i > position; i--) {
            if (wireItems[i] != BIRD_ID) {
                continue;
            }

            int newIndex = i + tone;
            if (newIndex < wireItems.length && wireItems[newIndex] == NONE_ID) {
                wireItems[newIndex] = wireItems[i];
            }

            wireItems[i] = NONE_ID;
        }
    }

    static void printWireItems(int[] wireItems) {
        for (int item : wireItems) {
            char c = '-';
            switch (item) {
                case BIRD_ID:
                    c = 'O';
                    break;

                case SPEAKER_ID:
                    c = '|';
                    break;
            }

            System.out.print(c);
        }

        System.out.println();
    }
}
