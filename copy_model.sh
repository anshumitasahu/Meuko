#!/usr/bin/env bash
# Copy server model definitions into each client's src/models directory.
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$ROOT_DIR/server/models"
TARGET_DIRS=(
  "$ROOT_DIR/client1/src/models"
  "$ROOT_DIR/client2/src/models"
)

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "error: source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

for target in "${TARGET_DIRS[@]}"; do
  echo "Copying $SOURCE_DIR/ -> $target/"
  mkdir -p "$target"
  cp -R "$SOURCE_DIR/." "$target/"
done

echo "Done. Models copied to ${#TARGET_DIRS[@]} client(s)."
