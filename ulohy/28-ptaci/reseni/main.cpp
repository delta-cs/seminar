#include <iostream>
#include <vector>

const int NONE_ID = 0;
const int BIRD_ID = 1;
const int SPEAKER_ID = 2;

void playSpeaker(std::vector<int>* wireItems, int position, int volume, int tone) {
    if (volume < 1 || tone < 1) {
        return;
    }

    int leftEdge = std::max(0, position - volume);
    for (int i = leftEdge; i < position; i++) {
        if ((*wireItems)[i] != BIRD_ID) {
            continue;
        }

        int newIndex = i - tone;
        if (newIndex >= 0 && (*wireItems)[newIndex] == NONE_ID) {
            (*wireItems)[newIndex] = (*wireItems)[i];
        }

        (*wireItems)[i] = NONE_ID;
    }

    int rightEdge = std::min(static_cast<int>(wireItems->size()) - 1, position + volume);
    for (int i = rightEdge; i > position; i--) {
        if ((*wireItems)[i] != BIRD_ID) {
            continue;
        }

        int newIndex = i + tone;
        if (newIndex < wireItems->size() && (*wireItems)[newIndex] == NONE_ID) {
            (*wireItems)[newIndex] = (*wireItems)[i];
        }

        (*wireItems)[i] = NONE_ID;
    }
}

void printWireItems(const std::vector<int>& wireItems) {
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

        std::cout << c;
    }

    std::cout << std::endl;
}

int main() {
    int d;
    std::cin >> d;
    std::vector<int> wireItems(d + 1, 0);

    int p;
    std::cin >> p;
    for (int i = 0; i < p; i++) {
        int position;
        std::cin >> position;
        wireItems[position] = BIRD_ID;
    }

    int s;
    std::cin >> s;

    std::vector<int> speakerVolumes(d + 1, 0);
    std::vector<int> speakerTones(d + 1, 0);

    for (int i = 0; i < s; i++) {
        int position;
        std::cin >> position;

        std::cin >> speakerVolumes[position];
        std::cin >> speakerTones[position];

        wireItems[position] = SPEAKER_ID;
    }

    int z;
    std::cin >> z;
    for (int i = 0; i < z; i++) {
        int speakerPosition;
        std::cin >> speakerPosition;
        playSpeaker(&wireItems, speakerPosition, speakerVolumes[speakerPosition], speakerTones[speakerPosition]);
    }

    printWireItems(wireItems);

    return 0;
}
