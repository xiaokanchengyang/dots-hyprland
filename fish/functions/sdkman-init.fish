function sdkman-init
    set -x SDKMAN_DIR $HOME/.sdkman
    # 使用 Fish 的命令替换语法代替 $(...)
    set SDKMAN_PLATFORM "$(cat "$SDKMAN_DIR/var/platform")"
    source $SDKMAN_DIR/bin/sdkman-init.sh
end
