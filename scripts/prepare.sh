# Cloud Run Functions でのinstallの時には実行しない
if [ -z "$GOOGLE_FUNCTION_TARGET" ]; then
    husky
fi